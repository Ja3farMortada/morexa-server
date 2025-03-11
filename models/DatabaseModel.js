const pool = require("../config/database");

class Database {
    // update database
    static async update() {
        try {
            const queries = [
                `INSERT INTO chart_of_accounts (id, account_number, english_name, arabic_name, category_number, sub_category_number, account_type) VALUES (14, '401', 'Accounts Payables (Suppliers)', NULL, 4, '40', 'LIABILITIES');`,

                `CREATE TABLE settings  (
                id int(11) NOT NULL AUTO_INCREMENT,
                brand_name varchar(255) NULL,
                phone_1 varchar(255) NULL,
                phone_2 varchar(255) NULL,
                address text NULL,
                address_2 text NULL,
                email varchar(255) NULL,
                website varchar(255) NULL,
                PRIMARY KEY (id));`,

                `ALTER TABLE products
                ADD COLUMN supplier_id_fk int(11) NULL AFTER is_deleted;`,

                `INSERT INTO chart_of_accounts (account_number, english_name, category_number, sub_category_number, account_type) VALUES ('101', 'Capital Account', 1, '10', 'EQUITY')`,

                `ALTER TABLE inventory_transactions ADD COLUMN order_id_fk int(11) NULL AFTER is_deleted;`,

                `CREATE TABLE sticky_notes
                (id int(11) NOT NULL AUTO_INCREMENT,title varchar(255) NULL,text longtext NULL,PRIMARY KEY (id));`,

                `ALTER TABLE sticky_notes
                ADD COLUMN note_index int(11) NULL DEFAULT NULL AFTER text;`,

                `ALTER TABLE journal_vouchers ADD COLUMN journal_notes varchar(255) NULL AFTER journal_description;`,

                `ALTER TABLE sales_order_items ADD COLUMN avg_cost decimal(10, 2) NULL DEFAULT 0 AFTER unit_cost;`,

                `ALTER TABLE users DROP COLUMN edit_pets;`,
            ];

            // Execute queries asynchronously
            const results = await Promise.allSettled(
                queries.map(async (query) => {
                    try {
                        const [rows] = await pool.query(query);
                        return { success: true, rows };
                    } catch (err) {
                        return { success: false, error: err.message };
                    }
                })
            );

            // Log results
            results.forEach((result, index) => {
                if (result.status === "fulfilled") {
                    console.log(`Query ${index + 1} succeeded:`, result.value);
                } else {
                    console.log(
                        `Query ${index + 1} failed:`,
                        result.reason || result.value.error
                    );
                }
            });
        } finally {
            return;
        }
    }
}

module.exports = Database;
