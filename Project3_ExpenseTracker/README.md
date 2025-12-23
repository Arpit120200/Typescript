# Typed Expense Tracker 💰

A robust financial tracking system built to demonstrate Object-Oriented Programming (OOP) principles in TypeScript. This project focuses on data integrity, ensuring that financial records cannot be tampered with directly from outside the logic engine.

## 🚀 Features
- **Transaction Management:** Add income and expenses with automatic ID generation.
- **Real-time Balance:** Uses a computed getter to calculate the current balance on-the-fly.
- **Data Encapsulation:** Protects the transaction history using private access modifiers.
- **Categorization:** Filter transactions by type (Income vs. Expense).

## 📋 TypeScript Concepts Used
- **Access Modifiers:** `private` to hide data and `public` to expose functionality.
- **Readonly Properties:** Ensuring `id` and other core data points cannot be modified after creation.
- **Getters (`get`):** Implementing derived state (balance) that behaves like a property.
- **Union Types:** Restricting transaction types to specific string literals (`"income" | "expense"`).
- **Array Methods:** Leveraging `.reduce()` and `.filter()` with full type safety.

## 🛠️ Tech Stack
- **Language:** TypeScript
- **Runtime:** Node.js

## ⚙️ Setup
1. Navigate to the project folder:
   ```bash
   cd Project3_ExpenseTracker

## Run
``` text
npx ts-node src/index.ts
