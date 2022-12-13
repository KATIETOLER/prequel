declare global {
    interface Array<T extends number> {
        sum(): T;
        sortNum(): Array<T>;
    }
}
export declare function sum(list: number[]): number;
