type Validator<T> = (val: unknown) => val is T;

export type Infer<T> =
    T extends Record<string, Validator<any>>
        ? { [K in keyof T]: T[K] extends Validator<infer U> ? U : never }
        : never;

export const v = {
    string(): Validator<string> {
        return (val): val is string => typeof val === "string";
    },

    number(): Validator<number> {
        return (val): val is number =>
            typeof val === "number" && !isNaN(val);
    },

    boolean(): Validator<boolean> {
        return (val): val is boolean => typeof val === "boolean";
    },

object<S extends Record<string, Validator<any>>>(schema: S) {
    return (val: unknown): val is Infer<S> => {
        if (typeof val !== "object" || val === null) return false;

        const obj = val as { [K in keyof S]: unknown };

        for (const key in schema) {
            const validator = schema[key];

            // 🔒 REQUIRED because of noUncheckedIndexedAccess
            if (!validator) return false;

            if (!validator(obj[key])) {
                return false;
            }
        }

        return true;
    };
    }
};

// -------------------- USAGE --------------------

const UserSchemaDef = {
    id: v.number(),
    username: v.string(),
};

const UserSchema = v.object(UserSchemaDef);

type User = Infer<typeof UserSchemaDef>;

const data: unknown = { id: 1, username: "GeminiUser" };

if (UserSchema(data)) {
    const validatedUser: User = data;
    console.log(`✅ Success! ${validatedUser.username}`);
}
