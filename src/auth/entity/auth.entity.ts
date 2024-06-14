export class AuthEntity {
    token: string;

    constructor(partial: Partial<AuthEntity>) {
        Object.assign(this, partial);
    }
}

