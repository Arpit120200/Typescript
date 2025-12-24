export const v = {
    string() {
        return (val) => typeof val === "string";
    },
    number() {
        return (val) => typeof val === "number" && !isNaN(val);
    },
    boolean() {
        return (val) => typeof val === "boolean";
    },
    object(schema) {
        return (val) => {
            if (typeof val !== "object" || val === null)
                return false;
            const obj = val;
            for (const key in schema) {
                const validator = schema[key];
                // 🔒 REQUIRED because of noUncheckedIndexedAccess
                if (!validator)
                    return false;
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
const data = { id: 1, username: "GeminiUser" };
if (UserSchema(data)) {
    const validatedUser = data;
    console.log(`✅ Success! ${validatedUser.username}`);
}
//# sourceMappingURL=index.js.map