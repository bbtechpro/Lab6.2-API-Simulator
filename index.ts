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