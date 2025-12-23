type TransactionType = "income" | "expense";

interface Transaction {
    readonly id: number,
    amount: number,
    category: string,
    type: TransactionType,
    date: Date
}

class ExpenseTracker {
    private transactions: Array<Transaction> = [];
    private nextId: number = 1;

    addTransaction(amount: number, category: string, type: TransactionType): void {
        const newEntry: Transaction = {
            id: this.nextId++,
            amount,
            category,
            type,
            date: new Date()
        };

        this.transactions.push(newEntry);
        console.log(`✅ Added ${type}: ${category} ($${amount})`);
    }

    get balance(): number {
        return this.transactions.reduce((acc, t) => {
            return t.type === "income" ? acc + t.amount : acc - t.amount;
        }, 0);
    }

    displaySummary(): void {
        console.log("\n--- EXPENSE TRACKER SUMMARY ---");
        if (this.transactions.length === 0) {
            console.log("No transactions recorded yet.");
        } else {
            this.transactions.forEach(t => {
                const sign = t.type === "income" ? "+" : "-";
                console.log(
                    `ID: ${t.id} | ${t.date.toLocaleDateString()} | ${t.category.padEnd(12)} | ${sign}$${t.amount}`
                );
            });
        }
        console.log("-------------------------------");
        console.log(`TOTAL BALANCE: $${this.balance}`);
        console.log("-------------------------------\n");
    }

    getTransactionsByType(type: TransactionType): Transaction[] {
        return this.transactions.filter(t => t.type === type);
    }
}

// --- TEST SUITE ---
const myTracker = new ExpenseTracker();

// Adding Entries
myTracker.addTransaction(5000, "Monthly Salary", "income");
myTracker.addTransaction(1200, "Rent", "expense");
myTracker.addTransaction(150, "Groceries", "expense");
myTracker.addTransaction(300, "Freelance Work", "income");

// Displaying results
myTracker.displaySummary();

// Testing filter logic
const allExpenses = myTracker.getTransactionsByType("expense");
console.log(`Total items categorized as expense: ${allExpenses.length}`);

// TypeScript Safety Check:
// myTracker.transactions = []; // ❌ Error: Property 'transactions' is private
// myTracker.balance = 10000;   // ❌ Error: Cannot assign to 'balance' because it is a read-only property (getter)