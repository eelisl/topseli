export type PricePerHour = {
    Rank: number;
    DateTime: Date;
    PriceNoTax: number;
    PriceWithTax: number;
}

export type PricePerHourResponse = {
    data: {
        data: PricePerHour[];
    }
}