// Part 3: Build the Main Application Logic
// Create an index.ts file to contain the main logic of your application.

// Write a Function to Handle API Calls and Display Data:

// Use fetchProductCatalog() to fetch product details and display them.
// For each product, fetch the reviews using fetchProductReviews(productId).
// After fetching products and reviews, retrieve the sales report using fetchSalesReport().
// Implement Error Handling Using Promises:

// Use .catch() to handle any errors from fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().
// Display error messages to the console if any of the calls fail.
// Use .finally() to log a message indicating that all API calls have been attempted.
// Part 4: Custom Error Classes
// Create Custom Error Classes for different error scenarios:
// NetworkError for network-related issues.
// DataError for data-related issues (e.g., missing fields in the API response).
// Update API Simulation Functions to use these custom error classes when rejecting Promises.
// Part 5: Optional Challenge
// Create a Retry Mechanism:

// Write a utility function retryPromise that accepts an async function, the number of retry attempts, and the delay between attempts.
// Hint: Use setTimeout to delay the next attempt.
// Hint: You will need to utilize recursion to implement this function. Not sure what recursion is, or don’t quite remember? This is an opportunity to practice your research abilities or review!
// Use this function to retry API calls that fail initially.
// Implement retryPromise with API Calls to retry up to three times for each API call before giving up.

// async/await
// const getProducts = async () => {
//   try {
//     // 1. Wait for the function to resolve
//     const products = await fetchProductCatalog();
    
//     // 2. Success: do something with the products
//     console.log("Products received:", products);
//   } catch (error) {
//     // 3. Failure: handle the error message ("Failed to fetch...")
//     console.error("Oops! Something went wrong:", error);
//   } finally {
//     // 4. (Optional) Run code regardless of success or failure
//     console.log("Fetch attempt finished.");
//   }
// };

// getProducts();

// try {
//   await fetchProductCatalog();
// } catch (error) {
//   if (error instanceof Error) {
//     // TypeScript now knows 'error' has a '.message' property
//     console.error(error.message);
//   } else {
//     // Handle cases where something else (like a string) was thrown
//     console.error("An unexpected error occurred:", error);
//   }
// }

// interface MyCustomError {
//   message: string;
//   code: number;
// }

// function isMyCustomError(error: unknown): error is MyCustomError {
//   return (
//     typeof error === 'object' &&
//     error !== null &&
//     'message' in error &&
//     'code' in error
//   );
// }

// // In my catch block:
// catch (error) {
//   if (isMyCustomError(error)) {
//     console.error(`Error ${error.code}: ${error.message}`);
//   }
// }

// function getErrorMessage(error: unknown): string {
//   if (error instanceof Error) return error.message;
//   return String(error); // Fallback for strings, numbers, etc.
// }

// // Usage:
// catch (error) {
//   const message = getErrorMessage(error);
//   console.log(message);
// }

import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';

// Part 5: Retry Mechanism using Recursion
async function retryPromise<T>(
  fn: () => Promise<T>, 
  retries: number = 3, 
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    console.log(`Retrying... attempts left: ${retries}`);
    await new Promise(resolve => setTimeout(resolve, delay));
    return retryPromise(fn, retries - 1, delay);
  }
}

// Part 3: Main Application Logic
const runDashboard = async () => {
  try {
    // 1. Get Products
    const products = await retryPromise(fetchProductCatalog);
    console.log("Catalog:", products);

    // 2. Get Reviews for each product
    for (const product of products) {
      const reviews = await retryPromise(() => fetchProductReviews(product.id));
      console.log(`Reviews for ${product.name}:`, reviews);
    }

    // 3. Get Sales Report
    const report = await retryPromise(fetchSalesReport);
    console.log("Sales Report:", report);

  } catch (error) {
    if (error instanceof Error) {
      console.error(`[${error.name}] ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
  } finally {
    console.log("All API operations attempted.");
  }
};

runDashboard();
