

export enum ConsequenceType {
    alert = 1,
    redact = 2,
    ban = 3
}

export class Consequence {
    constructor(public type: ConsequenceType, public reason?: string) {}
}
