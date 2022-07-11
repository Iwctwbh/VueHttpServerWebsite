export namespace Login {
    export interface Param {
        email: string
        password: string
        token: string
    }

    export interface Res {
        RefreshToken: string
        Token: string
    }
}

export namespace RefreshToken {
    export interface Param {
        token: string
    }
    export type Res = string
}

export namespace QuickCreateBook {
    export interface Request {
        Title: string
        Author: string
        // 章节数量
        Count: number
        Cover: string
        Introduction: string
        CategoryId: number
    }
    export type Response = number
}
