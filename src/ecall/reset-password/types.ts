export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { resetpass: reducerFn };

export type storeObj = { resetpass: SkPlainObj };