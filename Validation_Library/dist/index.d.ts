type Validator<T> = (val: unknown) => val is T;
export type Infer<T> = T extends Record<string, Validator<any>> ? {
    [K in keyof T]: T[K] extends Validator<infer U> ? U : never;
} : never;
export declare const v: {
    string(): Validator<string>;
    number(): Validator<number>;
    boolean(): Validator<boolean>;
    object<S extends Record<string, Validator<any>>>(schema: S): (val: unknown) => val is Infer<S>;
};
export {};
//# sourceMappingURL=index.d.ts.map