export declare const responseDataWithVariants: {
    data: {
        mode: string;
        userDefinedId: string;
        url: string;
        name: string;
        description: null;
        fileGuid: null;
        price: number;
        categories: never[];
        image: null;
        archived: boolean;
        inventoryManagementMethod: string;
        stock: number;
        totalStock: number;
        allowOutOfStockPurchases: boolean;
        statistics: {
            numberOfSales: number;
            totalSales: number;
        };
        customFields: ({
            name: string;
            operation: null;
            type: string;
            options: string;
            required: boolean;
            value: null;
            optionsArray: string[];
        } | {
            name: string;
            operation: null;
            type: string;
            options: null;
            required: boolean;
            value: null;
            optionsArray: string[];
        } | {
            name: string;
            operation: null;
            type: string;
            options: null;
            required: boolean;
            value: null;
            optionsArray: null;
        })[];
        variants: {
            stock: number;
            variation: {
                name: string;
                option: string;
            }[];
            allowOutOfStockPurchases: boolean;
        }[];
        metadata: null;
        id: string;
        creationDate: string;
        modificationDate: string;
    };
};
export declare const responseDataNoVariants: {
    data: {
        mode: string;
        userDefinedId: string;
        url: string;
        name: string;
        description: null;
        fileGuid: null;
        price: number;
        categories: never[];
        image: null;
        archived: boolean;
        inventoryManagementMethod: string;
        stock: number;
        totalStock: number;
        allowOutOfStockPurchases: boolean;
        statistics: {
            numberOfSales: number;
            totalSales: number;
        };
        customFields: ({
            name: string;
            operation: null;
            type: string;
            options: null;
            required: boolean;
            value: null;
            optionsArray: string[];
        } | {
            name: string;
            operation: null;
            type: string;
            options: null;
            required: boolean;
            value: null;
            optionsArray: null;
        })[];
        variants: never[];
        metadata: null;
        id: string;
        creationDate: string;
        modificationDate: string;
    };
};
//# sourceMappingURL=snipcartProduct.d.ts.map