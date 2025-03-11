const pool = require("../config/database");

class Product {
    // get all products
    static async getAll() {
        const query = `SELECT
        			C.category_name,
        			P.*,
                    CASE
                        WHEN barcode IS NULL OR barcode = '' THEN false
                        ELSE true
                    END AS have_barcode,
                    COALESCE(t.quantity, 0) AS quantity
        		FROM products P

        		LEFT JOIN products_categories C ON P.category_id_fk = C.category_id
        		LEFT JOIN (
        			SELECT
        				product_id_fk,
        				SUM(CASE WHEN transaction_type = 'SUPPLY' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'RETURN' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'DELETE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'ADD' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'REMOVE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'SALE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DISPOSE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DELIVER' THEN quantity ELSE 0 END) AS quantity
        			FROM inventory_transactions
        			GROUP BY product_id_fk
        		) t ON P.product_id = t.product_id_fk
        		WHERE P.is_deleted = 0
        		ORDER BY P.product_id ASC;`;

        const [result] = await pool.query(query);
        return result;
    }

    // get by category_id
    static async getByCategory(category_id) {
        const [rows] = await pool.query(
            `SELECT
        			C.category_name,
        			P.*,
                    CASE
                        WHEN barcode IS NULL OR barcode = '' THEN false
                        ELSE true
                    END AS have_barcode,
                    COALESCE(t.quantity, 0) AS quantity
        		FROM products P

        		LEFT JOIN products_categories C ON P.category_id_fk = C.category_id
        		LEFT JOIN (
        			SELECT
        				product_id_fk,
        				SUM(CASE WHEN transaction_type = 'SUPPLY' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'RETURN' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'DELETE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'ADD' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'REMOVE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'SALE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DISPOSE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DELIVER' THEN quantity ELSE 0 END) AS quantity
        			FROM inventory_transactions
        			GROUP BY product_id_fk
        		) t ON P.product_id = t.product_id_fk
        		WHERE P.is_deleted = 0
                AND C.category_id = ?
        		ORDER BY P.product_id ASC;`,
            [category_id]
        );
        return rows;
    }

    // get by product_id
    static async getById(product_id) {
        const query = `SELECT
        			C.category_name,
        			P.*,
                    CASE
                        WHEN barcode IS NULL OR barcode = '' THEN false
                        ELSE true
                    END AS have_barcode,
                    COALESCE(t.quantity, 0) AS quantity
        		FROM products P

        		LEFT JOIN products_categories C ON P.category_id_fk = C.category_id
        		LEFT JOIN (
        			SELECT
        				product_id_fk,
        				SUM(CASE WHEN transaction_type = 'SUPPLY' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'RETURN' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'DELETE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'ADD' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'REMOVE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'SALE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DISPOSE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DELIVER' THEN quantity ELSE 0 END) AS quantity
        			FROM inventory_transactions
        			GROUP BY product_id_fk
        		) t ON P.product_id = t.product_id_fk
        		WHERE P.is_deleted = 0
        		AND P.product_id = ?`;
        const [rows] = await pool.query(query, [product_id]);
        return rows;
    }

    static async getByBarcode(barcode) {
        const query = `SELECT
        			C.category_name,
        			P.*,
                    CASE
                        WHEN barcode IS NULL OR barcode = '' THEN false
                        ELSE true
                    END AS have_barcode,
                    COALESCE(t.quantity, 0) AS quantity
        		FROM products P

        		LEFT JOIN products_categories C ON P.category_id_fk = C.category_id
        		LEFT JOIN (
        			SELECT
        				product_id_fk,
        				SUM(CASE WHEN transaction_type = 'SUPPLY' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'RETURN' THEN quantity ELSE 0 END)
                        + SUM(CASE WHEN transaction_type = 'DELETE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'ADD' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'REMOVE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'SALE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DISPOSE' THEN quantity ELSE 0 END)
        				+ SUM(CASE WHEN transaction_type = 'DELIVER' THEN quantity ELSE 0 END) AS quantity
        			FROM inventory_transactions
        			GROUP BY product_id_fk
        		) t ON P.product_id = t.product_id_fk
        		WHERE P.is_deleted = 0
        		AND P.barcode = ?`;
        const [rows] = await pool.query(query, [barcode]);
        return rows;
    }

    // create new product
    static async create(data) {
        const connection = await pool.getConnection();
        try {
            // begin transaction
            await connection.beginTransaction();

            let product = {
                category_id_fk: data.category_id_fk,
                barcode: data.barcode,
                product_name: data.product_name,
                unit_cost_usd: data.unit_cost_usd,
                avg_cost_usd: data.unit_cost_usd,
                unit_price_usd: data.unit_price_usd,
                product_notes: data.product_notes,
                low_stock_threshold: data.low_stock_threshold,
                stock_management: data.stock_management,
            };
            // // insert into product table
            const [rows] = await connection.query(
                `INSERT INTO products SET ?`,
                product
            );

            if (data.stock_management && data.quantity) {
                await connection.query(
                    `INSERT INTO inventory_transactions (product_id_fk, quantity, transaction_type, transaction_notes) VALUES (?, ?, 'ADD', 'Initial Quantity');`,
                    [rows.insertId, data.quantity]
                );
            }

            // // commit transaction
            await connection.commit();

            return rows;
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // update existing product
    static async update(data) {
        const connection = await pool.getConnection();
        try {
            // begin transaction
            await connection.beginTransaction();

            let product = {
                category_id_fk: data.category_id_fk,
                barcode: data.barcode,
                product_name: data.product_name,
                unit_cost_usd: data.unit_cost_usd,
                unit_price_usd: data.unit_price_usd,
                product_notes: data.product_notes,
                stock_management: data.stock_management,
            };

            // check avg cost, if it's equal to unit cost then update it
            let [[{ avg_cost_usd, unit_cost_usd }]] = await connection.query(
                `SELECT avg_cost_usd, unit_cost_usd FROM products WHERE product_id = ?`,
                data.product_id
            );

            if (avg_cost_usd === unit_cost_usd) {
                product.avg_cost_usd = data.unit_cost_usd;
            }

            // update product table
            await connection.query(
                `UPDATE products SET ? WHERE product_id = ?`,
                [product, data.product_id]
            );

            // commit transaction
            await connection.commit();
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // delete product
    static async delete(id) {
        const connection = await pool.getConnection();
        try {
            // begin transaction
            await connection.beginTransaction();

            // delete from product table
            await connection.query(
                `UPDATE products SET is_deleted = 1, barcode = NULL WHERE product_id = ?`,
                id
            );

            // delete transactions
            await connection.query(
                `DELETE FROM inventory_transactions WHERE product_id_fk = ?`,
                id
            );

            // commit transaction
            await connection.commit();
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // update stock qty manually
    static async updateStock(data) {
        if (data.transaction_type === "REMOVE") {
            data.quantity = -data.quantity;
        }
        let query = `INSERT INTO inventory_transactions SET ?`;
        await pool.query(query, data);
    }

    static async getHistoryById(id) {
        const query = `SELECT * FROM inventory_transactions WHERE product_id_fk = ? AND is_deleted = 0 ORDER BY transaction_datetime DESC LIMIT 100`;
        let [rows] = await pool.query(query, id);
        return rows;
    }

    // get units of measure
    static async getUnits() {
        const [rows] = await pool.query(
            `SELECT * FROM units_of_measure WHERE is_deleted = 0`
        );
        return rows;
    }

    // generate barcode
    static async generateBarcode() {
        let generatedBarcode = "9"; // prefix number 9 to keep record of manually generated barcodes
        for (let i = 0; i < 12; i++) {
            generatedBarcode += Math.floor(Math.random() * 10); // Append a random digit
        }

        const [[barcodeExist]] = await pool.query(
            `SELECT barcode FROM products WHERE barcode = ?`,
            generatedBarcode
        );

        if (barcodeExist) {
            this.generateBarcode();
        } else {
            return generatedBarcode;
        }
    }
}

module.exports = Product;
