const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
    interface: "//localhost/POS80",
    type: PrinterTypes.EPSON,
});

class Print {
    static async openCashDrawer() {
        printer.clear();

        printer.openCashDrawer();

        try {
            await printer.execute();
            printer.clear();
            console.log("successfully cash");

            return {
                message: "cash drawer command received successfully!",
            };
        } catch (e) {
            printer.clear();
            console.log(e);
            throw e;
        }
    }
}
module.exports = Print;
