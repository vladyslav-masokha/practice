interface IAuthUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    password: string | null;
}

export type { IAuthUser }