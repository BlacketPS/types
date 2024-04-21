export class OpenPackBlookEntity {
    id: number;

    constructor(partial: Partial<OpenPackBlookEntity>) {
        Object.assign(this, partial);
    }
}
