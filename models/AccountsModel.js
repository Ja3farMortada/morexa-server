const pool = require("../config/database");

class Accounts {
    static async getAccountDetailsById(account_id, startDate, endDate) {
        let query = `
            WITH partner_balance AS (
                SELECT
                    SUM(CASE WHEN ji.debit IS NOT NULL THEN ji.debit ELSE 0 END) AS debit,
                    SUM(CASE WHEN ji.credit IS NOT NULL THEN ji.credit ELSE 0 END) AS credit
                FROM
                    journal_items ji
                INNER JOIN
                    journal_vouchers jv ON ji.journal_id_fk = jv.journal_id
                WHERE
                    ji.partner_id_fk = ?
                    AND Date(jv.journal_date) < ?
                    AND ji.is_deleted = 0
            )
            SELECT
                NULL AS journal_id,
                NULL AS order_id,
                NULL AS journal_date,
                NULL AS journal_number,
                'Initial Balance' AS journal_description,
                NULL AS journal_notes,
                COALESCE(pb.debit, 0) AS debit,
                COALESCE(pb.credit, 0) AS credit,
                NULL AS currency,
                NULL AS exchange_value,
                NULL AS account_code,
                NULL AS account_name,
                COALESCE(pb.debit, 0) - COALESCE(pb.credit, 0) AS balance
            FROM
                partner_balance pb

            UNION
            (
            SELECT
            jv.journal_id,
            SO.order_id,
            jv.journal_date AS journal_date,
            jv.journal_number,
            jv.journal_description,
            jv.journal_notes,
            ji.debit,
            ji.credit,
            ji.currency,
            ji.exchange_value,
            aa.code AS account_code,
            aa.name AS account_name,
            NULL AS balance
            FROM
            journal_items ji
            INNER JOIN
            accounts aa ON ji.partner_id_fk  = aa.account_id
            INNER JOIN
            journal_vouchers jv ON jv.journal_id = ji.journal_id_fk
            LEFT JOIN sales_orders SO ON jv.journal_id = SO.journal_voucher_id
            WHERE
            ji.partner_id_fk  = ?
            AND DATE(jv.journal_date) >= ? AND DATE(jv.journal_date) <= ?
            AND ji.is_deleted = 0
            )
            ORDER BY
            journal_date ASC`;

        const [rows] = await pool.query(query, [
            account_id,
            startDate,
            account_id,
            startDate,
            endDate,
        ]);

        return rows;
    }

    // get suppliers statement of accounts
    static async getSupplierStatement(account_id, startDate, endDate) {
        let query = `
            WITH partner_balance AS (
                SELECT
                    SUM(CASE WHEN ji.debit IS NOT NULL THEN ji.debit ELSE 0 END) AS debit,
                    SUM(CASE WHEN ji.credit IS NOT NULL THEN ji.credit ELSE 0 END) AS credit
                FROM
                    journal_items ji
                INNER JOIN
                    journal_vouchers jv ON ji.journal_id_fk = jv.journal_id
                WHERE
                    ji.partner_id_fk = ?
                    AND Date(jv.journal_date) < ?
                    AND ji.is_deleted = 0
            )
            SELECT
                NULL AS journal_id,
                NULL AS order_id,
                NULL AS journal_date,
                NULL AS journal_number,
                'Initial Balance' AS journal_description,
                NULL AS journal_notes,
                COALESCE(pb.debit, 0) AS debit,
                COALESCE(pb.credit, 0) AS credit,
                NULL AS currency,
                NULL AS exchange_value,
                NULL AS account_code,
                NULL AS account_name,
                COALESCE(pb.debit, 0) - COALESCE(pb.credit, 0) AS balance
            FROM
                partner_balance pb

            UNION
            (
            SELECT
            jv.journal_id,
            PO.order_id,
            jv.journal_date AS journal_date,
            jv.journal_number,
            jv.journal_description,
            jv.journal_notes,
            ji.debit,
            ji.credit,
            ji.currency,
            ji.exchange_value,
            aa.code AS account_code,
            aa.name AS account_name,
            NULL AS balance
            FROM
            journal_items ji
            INNER JOIN
            accounts aa ON ji.partner_id_fk  = aa.account_id
            INNER JOIN
            journal_vouchers jv ON jv.journal_id = ji.journal_id_fk
            LEFT JOIN purchase_orders PO ON jv.journal_id = PO.journal_voucher_id
            WHERE
            ji.partner_id_fk  = ?
            AND DATE(jv.journal_date) BETWEEN ? AND ?
            AND ji.is_deleted = 0
            )
            ORDER BY
            journal_date ASC`;
        const [rows] = await pool.query(query, [
            account_id,
            startDate,
            account_id,
            startDate,
            endDate,
        ]);
        return rows;
    }

    // get id by account number
    static async getIdByAccountNumber(number) {
        const query = `SELECT id FROM chart_of_accounts WHERE account_number = ?`;
        const [id] = await pool.query(query, number);
        return id;
    }

    //get multi accounts starting with account number
    static async getAccountsByAccountNumber(account_number) {
        const query = `SELECT * FROM chart_of_accounts WHERE account_number LIKE ?`;
        const [rows] = await pool.query(query, account_number);
        return rows;
    }
}
module.exports = Accounts;
