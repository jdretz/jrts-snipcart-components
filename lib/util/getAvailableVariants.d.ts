export declare type Variation = {
    name: string;
    option: string;
};
export declare type SnipcartVariation = {
    stock: number;
    variation: Variation[];
    allowOutOfStockPurchases: boolean;
};
export default function getAvailableVariants(variations: Variation[], rawSnipcartVariants: SnipcartVariation[]): Promise<SnipcartVariation | undefined>;
//# sourceMappingURL=getAvailableVariants.d.ts.map