const mysql = require("mysql2/promise");

var pool = mysql.createPool({
	connectionLimit: 10,
	host: "127.0.0.1",
	user: "morexa",
	password: "5~q^ukf0iIU4",
	database: "morexa",
	multipleStatements: true,
	dateStrings: true,
});

pool.getConnection(async (err, connection) => {
	if (err) {
		if (err.code === "PROTOCOL_CONNECTION_LOST") {
			console.error("Database connection was closed.");
		}
		if (err.code === "ER_CON_COUNT_ERROR") {
			console.error("Database has too many connections.");
		}
		if (err.code === "ECONNREFUSED") {
			console.error("Database connection was refused.");
		}
	}
	if (connection) await connection.release();
	return;
});

module.exports = pool;
