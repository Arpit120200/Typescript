# Validation Library 🛡️

A professional-grade, zero-dependency schema validation library for TypeScript. This project demonstrates advanced type manipulation, including **Mapped Types**, **Type Inference**, and **Type Predicates**, to provide a seamless developer experience.

## 🌟 Why this project?
In modern TypeScript development, we often have to define both a **Runtime Validator** and a **TypeScript Interface** for the same data. `ts-validate-mini` eliminates this redundancy by automatically inferring the TypeScript type from the validation schema.

## 🚀 Key Features
- **Auto-Type Inference:** Extract full TypeScript interfaces directly from your schema definitions using the `Infer<T>` utility.
- **Recursive Validation:** Deep-validate objects with nested schemas.
- **Strict Type Guards:** Narrow `unknown` data to specific types safely.
- **Lightweight & Fast:** Compiled to clean ESM with included declaration files (`.d.ts`).

## 📋 Advanced TypeScript Concepts
- **Mapped Types:** Transforming schema definitions into concrete TypeScript types.
- **Type Predicates (`is`):** Bridging the gap between runtime checks and compile-time safety.
- **The `infer` Keyword:** Used within conditional types to "un-wrap" the return types of validator functions.
- **Generic Constraints:** Restricting schemas to ensure they only contain valid validator functions.

## ⚙️ Installation & Build
This project is structured as an NPM package. To build the distribution files:

1. Navigate to the directory:
   ```bash
   cd Validation_Library
   ```

# Run
``` text
npm run build
