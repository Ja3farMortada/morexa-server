const pool = require("../config/database");
const Accounts = require("./AccountsModel");
const moment = require("moment-timezone");

class Customer {
    // get customers
    static async getAllCustomers() {
        const [result] = await pool.query(
            "SELECT * FROM accounts WHERE is_customer = 1 AND is_deleted = 0"
        );
        return result;
    }

    // get customer by id
    static async getCustomerById(id) {
        const [[result]] = await pool.query(
            "SELECT * FROM accounts WHERE account_id = ? AND is_customer = 1 AND is_deleted = 0",
            [id]
        );
        return result;
    }

    // create customer
    static async createCustomer(data, connection = null) {
        data.is_customer = 1;
        if (connection) {
            const [result] = await connection.query(
                "INSERT INTO accounts SET ?",
                data
            );
            return result;
        } else {
            const [result] = await pool.query(
                "INSERT INTO accounts SET ?",
                data
            );
            return result;
        }
    }

    // update customer
    static async updateCustomer(id, data) {
        const [result] = await pool.query(
            "UPDATE accounts SET ? WHERE account_id = ? AND is_customer = 1 AND is_deleted = 0",
            [data, id]
        );
        return result;
    }

    // delete customer
    static async deleteCustomer(id) {
        const [result] = await pool.query(
            "UPDATE accounts SET is_deleted = 1 WHERE account_id = ? AND is_customer = 1",
            [id]
        );
        return result;
    }

    // get customers debts

    static async getCustomerDebts() {
        let query = `SELECT
					a.account_id,
					a.name,
					a.phone,
					COALESCE(SUM(ji.debit) - SUM(ji.credit), 0) AS balance
				FROM
					journal_items ji

				LEFT JOIN journal_vouchers jv ON jv.journal_id = ji.journal_id_fk

				INNER JOIN accounts a ON ji.partner_id_fk = a.account_id

				WHERE
					ji.is_deleted = 0
                AND a.is_customer = 1
				GROUP BY ji.partner_id_fk

				HAVING balance != 0
				ORDER BY balance DESC`;
        const [result] = await pool.query(query);

        return result;
    }

    // update customer debts
    static async addManualDebt(data) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();

            moment.tz.setDefault("Asia/Beirut");
            data.transaction_datetime = moment(
                data.transaction_datetime
            ).format(`YYYY-MM-DD HH:mm:ss`);

            // create journal voucher
            let query = `INSERT INTO journal_vouchers (journal_date, journal_description, journal_notes, total_value) VALUES (?, ?, ?, ?)`;
            const [journal_voucher] = await connection.query(query, [
                data.transaction_datetime,
                "Manual Transaction",
                data.transaction_notes,
                data.amount,
            ]);

            let [_4111] = await Accounts.getIdByAccountNumber("4111");
            const ordinaryClients = {
                journal_id_fk: journal_voucher.insertId,
                journal_date: data.transaction_datetime,
                account_id_fk: _4111.id,
                partner_id_fk: data.selected_account,
                currency: "USD",
                debit: 0,
                credit: 0,
                exchange_value: data.exchange_rate,
            };

            let [_101] = await Accounts.getIdByAccountNumber("101");
            const capitalAccount = {
                journal_id_fk: journal_voucher.insertId,
                journal_date: data.transaction_datetime,
                account_id_fk: _101.id,
                partner_id_fk: null,
                currency: "USD",
                debit: 0,
                credit: 0,
                exchange_value: data.exchange_rate,
            };

            // debit or credit based on transaction type
            if (data.transaction_type == "ADD") {
                ordinaryClients.debit = data.amount;
                capitalAccount.credit = data.amount;
            } else {
                ordinaryClients.credit = data.amount;
                capitalAccount.debit = data.amount;
            }

            // add journal items
            await connection.query(
                `INSERT INTO journal_items SET ?`,
                ordinaryClients
            );
            await connection.query(
                `INSERT INTO journal_items SET ?`,
                capitalAccount
            );

            await connection.commit();
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    //////////////////////////////////
    //customer model related to user//
    //////////////////////////////////

    //get customer latest purchases
    static async getCustomerLatestPurchases(account_id) {
        const [result] = await pool.query(
            `SELECT
            customer_id,
            product_id,
            order_id,
            order_datetime,
            unit_price,
            price_type
            FROM (
                 SELECT
                i.customer_id,
                im.product_id,
                i.order_id,
                i.order_datetime,
                im.unit_price,
                im.price_type,

                ROW_NUMBER() OVER (PARTITION BY im.product_id ORDER BY i.order_datetime DESC) AS purchase_rank
            FROM
                sales_orders i
            JOIN
                sales_order_items im ON i.order_id = im.order_id
                LEFT JOIN
                	accounts a ON a.account_id = i.customer_id
                WHERE i.customer_id = ? AND im.is_deleted = 0
            ) ranked_purchases
            WHERE
                purchase_rank <= 1;`,
            [account_id]
        );
        return result;
    }

    static async getCustomerTotalBalance(account_id) {
        const query = `SELECT
					COALESCE(SUM(ji.debit) - SUM(ji.credit), 0) AS balance
				FROM
					journal_vouchers jv
				LEFT JOIN
					journal_items ji ON jv.journal_id = ji.journal_id_fk
				WHERE
					ji.partner_id_fk = ?
					AND ji.is_deleted = 0`;
        const [[result]] = await pool.query(query, [account_id]);
        return result;
    }
}

module.exports = Customer;
