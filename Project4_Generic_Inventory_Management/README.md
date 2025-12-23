# Generic Inventory System 📦

A reusable warehouse management system built to demonstrate the power of **Generics** and **Type Constraints** in TypeScript. This project shows how to write highly flexible code that adapts to different data models while maintaining 100% type safety.

## 🚀 Features
- **Generic Storage:** A single class that can manage Electronics, Books, or any other item type.
- **Type Constraints:** Ensures all managed items share a common set of base properties (ID, Name, Stock).
- **Extensible Architecture:** Uses interface inheritance to create specialized item categories.
- **Strict Lookup:** Type-safe retrieval of items from storage.

## 📋 TypeScript Concepts Used
- **Generics (`<T>`):** Creating reusable components that work with a variety of types.
- **Generic Constraints (`extends`):** Limiting a generic type to a specific base structure.
- **Interface Inheritance:** Using `extends` to build complex types from simpler ones.
- **Type Inference:** Allowing TypeScript to "guess" the specific subtype during method calls.

## ⚙️ Setup
1. Navigate to the project folder:
   ```bash
   cd Project4_Generic_Inventory_Management

## Run
``` test
npx ts-node src/index.ts
