// This file will contain functions that simulate API requests using Promises.
// Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message.

// Create the following functions in apiSimulator.ts, ensuring each returns a Promise:

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
// Resolve the Promise with an array of mock products after a 1-second delay.
// Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

// Continue with fetchProductReviews() and fetchSalesReport() functions similarly, adding realistic mock data and a chance for rejection.

// fetchProductReviews(productId: number): Simulates fetching reviews for a product.

// Resolve the Promise with an array of reviews after a 1.5-second delay.
// Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

// Resolve the Promise with a mock sales report after a 1-second delay.
// Reject randomly with an error message, e.g., "Failed to fetch sales report".

