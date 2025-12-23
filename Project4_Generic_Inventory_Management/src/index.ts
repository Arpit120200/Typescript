interface BaseItem {
    id: number,
    name: string,
    stock: number
}

interface Electronic extends BaseItem {
    voltage: number,
    warrantyMonths: number;
}

interface Books extends BaseItem {
    author: string,
    isbn: string;
}

class Warehouse<T extends BaseItem> {
    private inventory: T[] = []

    addItem(item: T): void {
        this.inventory.push(item);
        console.log(`📦 Added to inventory: ${item.name} (ID: ${item.id})`);
    }

   getItem(id: number): T | undefined {
        return this.inventory.find(item => item.id === id);
    }

    updateStock(id: number, quantity: number): void {
        const item = this.getItem(id);
        if (item) {
            item.stock += quantity;
            console.log(`📈 Updated ${item.name} stock. New total: ${item.stock}`);
        } else {
            console.error(`❌ Item with ID ${id} not found.`);
        }
    }

    listAll(): void {
        console.log("\n--- WAREHOUSE INVENTORY ---");
        this.inventory.forEach(item => {
            console.log(`[ID: ${item.id}] ${item.name} - Stock: ${item.stock}`);
            // Note: We can't access item.author here because T might not be a Book!
        });
        console.log("---------------------------\n");
    }
}

// --- TEST SUITE ---

// Create an Electronics Warehouse
const electronicsStore = new Warehouse<Electronic>();

electronicsStore.addItem({
    id: 101,
    name: "Gaming Laptop",
    stock: 5,
    voltage: 240,
    warrantyMonths: 24
});

// Create a Book Warehouse
const bookStore = new Warehouse<Books>();

bookStore.addItem({
    id: 501,
    name: "TypeScript Deep Dive",
    stock: 12,
    author: "Basarat Ali Syed",
    isbn: "978-123456789"
});

// Testing Updates
electronicsStore.updateStock(101, 2);
bookStore.listAll();