export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}
export type RequestPayloadLogin = {
    type: string, payload: { userName: string, password: string }
};
export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { login: reducerFn };

export type storeObj = { login: SkPlainObj };