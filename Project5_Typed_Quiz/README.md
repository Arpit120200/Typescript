# Typed Quiz Engine 🧠

A CLI-based quiz system designed to demonstrate advanced type-system features in TypeScript, specifically **Discriminated Unions** and **Type Narrowing**. This project handles different data formats (Multiple Choice vs. True/False) within a single unified logic flow.

## 🚀 Features
- **Multi-Format Questions:** Support for different question structures using a Discriminated Union.
- **Strict Logic Narrowing:** Uses type guards to safely access format-specific properties (like MCQ options).
- **Metadata Tuples:** Stores difficulty and scoring data in fixed-length, strictly-typed arrays.
- **Score Tracking:** Keeps a running total of points earned based on question metadata.

## 📋 TypeScript Concepts Used
- **Discriminated Unions:** Combining multiple interfaces into a single type with a common literal "discriminant" property.
- **Type Narrowing:** Leveraging `switch` and `if` blocks to allow TypeScript to infer specific subtypes.
- **Tuples:** Using fixed-length arrays for specific data pairs (Difficulty/Points).
- **Literal Types:** Restricting values to exact strings to prevent runtime typos.

## ⚙️ Setup
``` bash
cd Project5_Typed_Quiz
```

## Run
``` text
npx ts-node src/index.ts

