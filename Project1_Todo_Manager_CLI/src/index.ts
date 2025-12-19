enum Status {
    todo = "todo",
    completed = "completed"
}

interface Todo {
    id: number;
    task: string;
    status: Status;
}

class TodoManager {
    private todos: Todo[] = []
    private nextId: number = 1;

    addTodo(task: string) : void {
        const newTodo: Todo = {
            id: this.nextId++,
            task,
            status: Status.todo
        };
        this.todos.push(newTodo);
        console.log(`Added: ${task} (ID: ${newTodo.id})`);
    }

    toggleStatus(id: number): void {
        const t = this.todos.find(item => item.id === id)

        if (!t) {
            console.error(`X Error: Task with ID ${id} not found.`);
            return;
        }

        t.status = t.status === Status.todo ? Status.completed : Status.todo;
        console.log(`ID ${id} is now: ${t.status}`)
    }

    listTasks(): void {
        console.log("\n-----Your To-DO List-----");
            if (this.todos.length === 0) {
                console.log("No Tasks Found!");
            } else {
                this.todos.forEach(t => {
                    const marker = t.status === Status.completed ? "[✔]" : "[ ]";
                    console.log(`${t.id}. ${marker} ${t.task}`);
                });
            }
        console.log("-----------\n");
    }

    removeTask(id: number): void {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(item => item.id !== id);

        if (this.todos.length < initialLength) {
            console.log(`🗑 Removed task ID: ${id}`);
        } else {
            console.error(`X Error: Could not find ID ${id} to remove.`);
        }
    }
}

// 1. Initialize the manager
const myTodoList = new TodoManager();

// 2. Test Adding Tasks
console.log("--- Test: Adding Tasks ---");
myTodoList.addTodo("Learn TypeScript Interfaces");
myTodoList.addTodo("Practice Enums");
myTodoList.addTodo("Build a CLI App");
myTodoList.listTasks(); 
// Expected: 3 tasks shown, all with "Todo" status.

// 3. Test Toggling Status
console.log("--- Test: Toggling Status ---");
myTodoList.toggleStatus(1); // Should change ID 1 to Completed
myTodoList.toggleStatus(99); // Should handle "ID not found" gracefully
myTodoList.listTasks(); 
// Expected: ID 1 should now show "Completed".

// 4. Test Removing Tasks
console.log("--- Test: Removing Tasks ---");
myTodoList.removeTask(2); // Should remove "Practice Enums"
myTodoList.listTasks();
// Expected: Only IDs 1 and 3 should remain.

// 5. Final check on Data Integrity
// Try to manually push a wrong object (This should cause a TS Error if you try it!)
// myTodoList.todos.push({ id: "wrong", task: 123, status: "Unknown" });