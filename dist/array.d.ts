declare global {
    interface Array<T extends number> {
        sum(): Array<T>;
        sortNum(): Array<T>;
    }
}
export declare function sum(list: number[]): number;
