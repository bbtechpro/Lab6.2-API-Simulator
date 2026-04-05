Scenario
You are developing an e-commerce dashboard that fetches data from various APIs, including a product catalog, user reviews, and a sales report. Each API call could potentially fail due to network issues, incorrect endpoints, or data inconsistencies. To build a stable and user-friendly application, you need to manage these scenarios with proper error handling.

Task
In this lab, you will build a small application that leverages asynchronous API calls using Promises. You will also implement error handling to ensure that the application can manage unexpected issues gracefully. This lab will test your ability to work with asynchronous programming concepts, as well as to manage errors effectively in a real-world scenario.

Objectives
By the end of this lab, you will be able to:

Apply Promises to manage multiple asynchronous operations in JavaScript.
Implement chained Promises to handle sequential data retrieval and manage dependencies between API calls.
Utilize .catch() and .finally() to handle errors and perform cleanup tasks in a Promise chain.
Design custom error classes to improve error identification and debugging.
Implement a retry mechanism to manage failed asynchronous requests, enhancing application resilience.
Analyze the benefits and challenges of using error handling strategies in complex asynchronous workflows.

Critical Thinking Questions
Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
How does using custom error classes improve debugging and error identification?
When might a retry mechanism be more effective than an immediate failure response?
