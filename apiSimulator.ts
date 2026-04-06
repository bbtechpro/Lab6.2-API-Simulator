// This file will contain functions that simulate API requests using Promises.
// Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message.

// Create the following functions in apiSimulator.ts, ensuring each returns a Promise:

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
// Resolve the Promise with an array of mock products after a 1-second delay.
// Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".

// export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => { //Defines and exports a function. Returns a Promise that will eventually resolve into an array of objects, where each object must have an id, name, and price.
//     console.log(fetchProductCatalog.Promise)
//     return new Promise((resolve, reject) => { //Creates a new Promise instance. It takes two "callback" functions: resolve (for success) and reject (for failure).
//     setTimeout(() => { //Introduces a 1-second delay to mimic the time it takes for a real network request to travel to a server and back.
//         if (Math.random() < 0.8) { //A logic gate that succeeds 80% of the time. This is used to simulate unpredictable network conditions.
//         resolve([
//             { id: 1, name: "Laptop", price: 1200 },
//             { id: 2, name: "Headphones", price: 200 },
//         ]); //If the random check passes, the Promise "finishes" successfully and returns the hardcoded array of product data.
//         } else {
//         reject("Failed to fetch product catalog"); //The remaining 20% of the time, the Promise fails and returns an error message.
//         }
//     }, 1000);
//     });
// };

// Continue with fetchProductReviews() and fetchSalesReport() functions similarly, adding realistic mock data and a chance for rejection.

// fetchProductReviews(productId: number): Simulates fetching reviews for a product.

// Resolve the Promise with an array of reviews after a 1.5-second delay.
// Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

// Resolve the Promise with a mock sales report after a 1-second delay.
// Reject randomly with an error message, e.g., "Failed to fetch sales report".

import { NetworkError, DataError } from './errors';

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 
        ? resolve([{ id: 1, name: "Laptop", price: 1200 }, { id: 2, name: "Headphones", price: 200 }])
        : reject(new NetworkError("Failed to fetch product catalog"));
    }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve(["Great quality!", "Excellent value for money."])
        : reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve({ totalSales: 1400, unitsSold: 2 })
        : reject(new NetworkError("Failed to fetch sales report"));
    }, 1000);
  });
};
