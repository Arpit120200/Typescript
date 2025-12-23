# Discriminated Union Shape Calculator 📐

A mathematical utility built to demonstrate advanced **Discriminated Unions** and **Exhaustive Type Checking** in TypeScript. This project calculates the area of various geometric shapes while ensuring that each shape's unique properties are handled with total type safety.

## 🚀 Features
- **Multi-Shape Support:** Handles Circles, Rectangles, and Squares.
- **Type-Safe Calculations:** Mathematical formulas are strictly mapped to their corresponding shape types.
- **Exhaustive Checking:** Uses the `never` type to ensure all union members are handled at compile-time.

## 📋 TypeScript Concepts Used
- **Discriminated Unions:** Using a common `kind` property to distinguish between interfaces.
- **Literal Types:** Restricting the `kind` property to specific string values.
- **Type Narrowing:** Utilizing `switch` statements to allow TypeScript to infer specific object shapes.
- **The `never` Type:** Implementing a safety net for exhaustive pattern matching.

## ⚙️ Setup
``` bash
cd Project6_Shape_Calculator
```
## Run
``` text
npx ts-node src/index.ts
