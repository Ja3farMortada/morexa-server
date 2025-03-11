const pool = require("../config/database");
const Accounts = require("./AccountsModel");
const moment = require("moment-timezone");

class BalanceModel {
    // get balance
    static async getBalance() {
        const [_531] = await Accounts.getIdByAccountNumber("531");
        const query = `SELECT COALESCE(sum(debit) - sum(credit),0) AS balance
        FROM journal_items ji
        where ji.is_deleted =0
        AND ji.account_id_fk= ?`;
        const [[rows]] = await pool.query(query, [_531.id]);
        return rows;
    }

    // get cash transaction history
    static async getCashTransactions(start, end) {
        const [_531] = await Accounts.getIdByAccountNumber("531");
        let query = `WITH partner_balance AS (
            SELECT
                SUM(CASE WHEN ji.debit IS NOT NULL THEN ji.debit ELSE 0 END) AS debit,
                SUM(CASE WHEN ji.credit IS NOT NULL THEN ji.credit ELSE 0 END) AS credit
            FROM
                journal_items ji
            INNER JOIN
                journal_vouchers jv ON ji.journal_id_fk = jv.journal_id
            WHERE
                ji.account_id_fk = ?
                AND Date(jv.journal_date) < ?
                AND ji.is_deleted = 0
        )
        SELECT
            NULL AS journal_date,
            NULL AS journal_datetime,
            NULL AS journal_number,
            'Initial Balance' AS journal_description,
            COALESCE(pb.debit, 0) AS debit,
            COALESCE(pb.credit, 0) AS credit,
            NULL AS currency,
            NULL AS exchange_value,
            COALESCE(pb.debit, 0) - COALESCE(pb.credit, 0) AS balance
        FROM
            partner_balance pb

        UNION
        (
        SELECT
        DATE(jv.journal_date) AS journal_date,
        jv.journal_date AS journal_datetime,
        jv.journal_number,
        jv.journal_description,
        ji.debit,
        ji.credit,
        ji.currency,
        ji.exchange_value,
        NULL AS balance
        FROM
        journal_items ji
        INNER JOIN
        journal_vouchers jv ON jv.journal_id = ji.journal_id_fk
        WHERE
        ji.account_id_fk  = ?
        AND DATE(jv.journal_date) BETWEEN ? AND ?
        AND ji.is_deleted = 0
        )
        ORDER BY
        journal_datetime ASC`;

        const [rows] = await pool.query(query, [
            _531.id,
            start,
            _531.id,
            start,
            end,
        ]);
        return rows;
    }

    // correct balance manually
    static async correctBalance(data) {
        const connection = await pool.getConnection();

        try {
            await connection.beginTransaction();

            moment.tz.setDefault("Asia/Beirut");
            let date = moment().format(`YYYY-MM-DD HH:mm:ss`);

            // create journal voucher
            let query = `INSERT INTO journal_vouchers (journal_date, journal_description, total_value) VALUES (?, ?, ?)`;
            let [journal_voucher] = await connection.query(query, [
                date,
                data.transaction_notes,
                data.amount,
            ]);

            // cash account
            let [_531] = await Accounts.getIdByAccountNumber("531");
            let cashDollar = {
                journal_id_fk: journal_voucher.insertId,
                journal_date: date,
                account_id_fk: _531.id,
                currency: "USD",
                exchange_value: data.exchange_rate,
            };

            // capital account
            let [_101] = await Accounts.getIdByAccountNumber("101");
            let capital = {
                journal_id_fk: journal_voucher.insertId,
                journal_date: date,
                account_id_fk: _101.id,
                currency: "USD",
                exchange_value: data.exchange_rate,
            };

            // check transaction type
            if (data.transaction_type == "ADD") {
                cashDollar.debit = data.amount;
                capital.credit = data.amount;
            } else {
                cashDollar.credit = data.amount;
                capital.debit = data.amount;
            }

            // create journal entries
            await connection.query(
                `INSERT INTO journal_items SET ?`,
                cashDollar
            );
            await connection.query(`INSERT INTO journal_items SET ?`, capital);

            // commit changes
            await connection.commit();
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // static async getAllUsersBalance() {
    //     const [_531] = await Account.getIdByAccountNumber("531");
    //     const query = `SELECT u.user_id , COALESCE(sum(ji.credit) - sum(ji.debit),0) AS balance
    //         FROM users u
    //         LEFT JOIN journal_items ji  ON u.user_id = ji.user_id
    //         AND ji.is_deleted = 0
    //         AND ji.account_id_fk= ?
    //         GROUP BY u.user_id;`;
    //     const [rows] = await pool.query(query, [_531.id]);
    //     return rows;
    // }

    // //transfer money

    // static async transferMoney(user_id, paymentData) {
    //     const connection = await pool.getConnection();
    //     try {
    //         await connection.beginTransaction();

    //         moment.tz.setDefault("Asia/Beirut");
    //         paymentData.payment_date = moment(paymentData.payment_date).format(
    //             `YYYY-MM-DD ${moment().format("HH:mm:ss")}`
    //         );

    //         let [[{ number }]] = await connection.query(
    //             `SELECT IFNULL(MAX(CAST(SUBSTRING(journal_number , 4) AS UNSIGNED)), 1000) + 1 AS number FROM journal_vouchers jv where journal_number like 'TRA%'`
    //         );

    //         let payment_number = `TRA${number.toString().padStart(4, "0")}`;

    //         //get admin account
    //         let [[admin_account]] = await connection.query(
    //             `SELECT user_id FROM users WHERE user_type = 'admin' and is_deleted = 0`
    //         );

    //         //insert to vouchers and journal_items
    //         let query = `INSERT INTO journal_vouchers ( user_id, journal_number, journal_date, journal_description, total_value) VALUES (?, ?, ?, ?, ?)`;
    //         const [journal_voucher] = await connection.query(query, [
    //             user_id,
    //             payment_number,
    //             paymentData.payment_date,
    //             "Transfer",
    //             paymentData.amount,
    //         ]);

    //         let [_531] = await Account.getIdByAccountNumber("531");

    //         const firstItem = {
    //             journal_id_fk: journal_voucher.insertId,
    //             journal_date: paymentData.payment_date,
    //             account_id_fk: _531.id,
    //             user_id: admin_account.user_id,
    //             reference_number: paymentData.reference_number,
    //             partner_id_fk: null,
    //             currency: "USD",
    //             debit: 0,
    //             credit: paymentData.amount,
    //             exchange_value: paymentData.exchange_rate,
    //         };

    //         await connection.query(
    //             `INSERT INTO journal_items SET ?`,
    //             firstItem
    //         );

    //         const secondItem = {
    //             journal_id_fk: journal_voucher.insertId,
    //             journal_date: paymentData.payment_date,
    //             account_id_fk: _531.id,
    //             user_id: user_id,
    //             reference_number: paymentData.reference_number,
    //             partner_id_fk: paymentData.customer_id,
    //             currency: "USD",
    //             debit: paymentData.amount,
    //             credit: 0,
    //             exchange_value: paymentData.exchange_rate,
    //         };
    //         await connection.query(
    //             `INSERT INTO journal_items SET ?`,
    //             secondItem
    //         );

    //         await connection.commit();
    //     } catch (error) {
    //         await connection.rollback();
    //         throw error;
    //     } finally {
    //         connection.release();
    //     }
    // }

    // static async updateTransfer(user_id, paymentData) {
    //     const connection = await pool.getConnection();
    //     try {
    //         await connection.beginTransaction();

    //         moment.tz.setDefault("Asia/Beirut");
    //         paymentData.payment_date = moment(paymentData.payment_date).format(
    //             `YYYY-MM-DD ${moment().format("HH:mm:ss")}`
    //         );

    //         //insert to vouchers and journal_items
    //         let query = `UPDATE journal_vouchers SET journal_date = ? ,  total_value = ? WHERE journal_id = ? and user_id = ?`;
    //         const [journal_voucher] = await connection.query(query, [
    //             paymentData.payment_date,
    //             paymentData.amount,
    //             paymentData.journal_id,
    //             user_id,
    //         ]);

    //         let [_531] = await Account.getIdByAccountNumber("531");

    //         await connection.query(
    //             `UPDATE journal_items SET credit=?, journal_date=? WHERE journal_id_fk=? AND user_id!=?`,
    //             [
    //                 paymentData.amount,
    //                 paymentData.payment_date,
    //                 paymentData.journal_id,
    //                 user_id,
    //             ]
    //         );

    //         await connection.query(
    //             `UPDATE journal_items SET debit=?, journal_date=? WHERE journal_id_fk=? AND user_id=?`,
    //             [
    //                 paymentData.amount,
    //                 paymentData.payment_date,
    //                 paymentData.journal_id,
    //                 user_id,
    //             ]
    //         );

    //         await connection.commit();
    //     } catch (error) {
    //         await connection.rollback();
    //         throw error;
    //     } finally {
    //         connection.release();
    //     }
    // }

    // static async deleteTransfer(user_id, journal_id) {
    //     const connection = await pool.getConnection();
    //     try {
    //         await connection.beginTransaction();

    //         let [journal_items] = await connection.query(
    //             `SELECT journal_item_id FROM journal_items ji
    //             inner join journal_vouchers jv
    //             ON jv.journal_id = ji.journal_id_fk
    //             WHERE journal_id_fk = ? AND jv.user_id = ?`,
    //             [journal_id, user_id]
    //         );
    //         journal_items = journal_items.map((item) => item.journal_item_id);

    //         await connection.query(
    //             `UPDATE journal_items SET is_deleted = 1 WHERE journal_item_id in (?)`,
    //             [journal_items]
    //         );

    //         await connection.query(
    //             `UPDATE journal_vouchers SET is_deleted = 1 WHERE journal_id = ? AND user_id = ?`,
    //             [journal_id, user_id]
    //         );

    //         await connection.commit();
    //     } catch (error) {
    //         await connection.rollback();
    //         throw error;
    //     } finally {
    //         connection.release();
    //     }
    // }

    // static async getTransferAccounts(user_id) {
    //     const query = `SELECT u.user_id, u.first_name, u.last_name, CONCAT(u.first_name, ' ', u.last_name) AS full_name
    // 		FROM users u
    // 		WHERE u.user_id != ? AND user_type = 'admin';`;
    //     const [rows] = await pool.query(query, [user_id]);
    //     return rows;
    // }
}

module.exports = BalanceModel;
