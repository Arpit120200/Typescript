var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.transactions = [];
        this.nextId = 1;
    }
    ExpenseTracker.prototype.addTransaction = function (amount, category, type) {
        var newEntry = {
            id: this.nextId++,
            amount: amount,
            category: category,
            type: type,
            date: new Date()
        };
        this.transactions.push(newEntry);
        console.log("\u2705 Added ".concat(type, ": ").concat(category, " ($").concat(amount, ")"));
    };
    Object.defineProperty(ExpenseTracker.prototype, "balance", {
        get: function () {
            return this.transactions.reduce(function (acc, t) {
                return t.type === "income" ? acc + t.amount : acc - t.amount;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    ExpenseTracker.prototype.displaySummary = function () {
        console.log("\n--- EXPENSE TRACKER SUMMARY ---");
        if (this.transactions.length === 0) {
            console.log("No transactions recorded yet.");
        }
        else {
            this.transactions.forEach(function (t) {
                var sign = t.type === "income" ? "+" : "-";
                console.log("ID: ".concat(t.id, " | ").concat(t.date.toLocaleDateString(), " | ").concat(t.category.padEnd(12), " | ").concat(sign, "$").concat(t.amount));
            });
        }
        console.log("-------------------------------");
        console.log("TOTAL BALANCE: $".concat(this.balance));
        console.log("-------------------------------\n");
    };
    ExpenseTracker.prototype.getTransactionsByType = function (type) {
        return this.transactions.filter(function (t) { return t.type === type; });
    };
    return ExpenseTracker;
}());
// --- TEST SUITE ---
var myTracker = new ExpenseTracker();
// Adding Entries
myTracker.addTransaction(5000, "Monthly Salary", "income");
myTracker.addTransaction(1200, "Rent", "expense");
myTracker.addTransaction(150, "Groceries", "expense");
myTracker.addTransaction(300, "Freelance Work", "income");
// Displaying results
myTracker.displaySummary();
// Testing filter logic
var allExpenses = myTracker.getTransactionsByType("expense");
console.log("Total items categorized as expense: ".concat(allExpenses.length));
// TypeScript Safety Check:
// myTracker.transactions = []; // ❌ Error: Property 'transactions' is private
// myTracker.balance = 10000;   // ❌ Error: Cannot assign to 'balance' because it is a read-only property (getter)
