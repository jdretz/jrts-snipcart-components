export declare type Variation = {
    name: string | undefined;
    option: string | undefined;
};
export declare type SnipcartVariation = {
    stock: number;
    variation: Variation[];
    allowOutOfStockPurchases: boolean;
};
export default function getAvailableVariants(variations: Variation[], rawSnipcartVariants: SnipcartVariation[]): Promise<number>;
//# sourceMappingURL=getAvailableVariants.d.ts.map