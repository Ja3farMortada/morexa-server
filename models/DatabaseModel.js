const pool = require("../config/database");

class Database {
    // update database
    static async update() {
        try {
            const queries = [``];

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
