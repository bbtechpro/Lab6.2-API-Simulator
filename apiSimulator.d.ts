export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: (productId: number) => Promise<string[]>;
export declare const fetchSalesReport: () => Promise<{
    totalSales: number;
    unitsSold: number;
}>;
//# sourceMappingURL=apiSimulator.d.ts.map