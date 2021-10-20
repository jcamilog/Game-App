// TODO: This file have 2 spaces should there is only unique way. (use editorconfig and prettier)

export interface gamesResponse {
    cheapest: string;
    cheapestDealID: string;
    external: string;
    gameID: string;
    internalName: string;
    steamAppID: string;
    thumb: string;
}
export interface detailResponse {
    cheapestPriceEver: {
        date: number;
        price: string;
    };
    deals: [
        {
            dealID: string;
            price: string;
            retailPrice: string;
            savings: string;
            storeID: string;
        }
    ];
    info: {
        steamAppID: string;
        thumb: string;
        title: string;
    };
}
