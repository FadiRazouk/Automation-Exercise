# Automation Exercise - Cypress Test Suite

This repository contains automated tests for the "Automation Exercise" web application using Cypress. The tests are designed to cover critical functionalities such as user authentication, product browsing, cart management, and the checkout process.

# Test Strategy:
## Test Coverage
The test suite aims to provide comprehensive coverage of critical functionalities of the "Automation Exercise" web application. We have prioritized test scenarios based on their importance and impact on the user experience. The coverage includes:

- User Authentication:

Valid login scenarios.
Invalid login scenarios (incorrect username or password).

- Product Browsing:

Browsing products across different categories.
Verification of product details on the product page.

- Cart Management:

Adding products to the cart.
Removing items from the cart.

- Checkout Process:

Completing the checkout process, including filling shipping details and selecting payment methods.
Verification of successful order completion and receipt generation.

## Approach to Handling Advanced Requirements

1 - Data-Driven Testing:

Utilizing fixtures to store login credentials and product details, allowing for data-driven testing.
Storing test data separately from test scripts ensures maintainability and scalability.

2 - Custom Commands:

Implementing custom Cypress commands to encapsulate repetitive actions or assertions, enhancing code reusability and readability.
Custom commands abstract complex actions, simplifying test scripts and reducing duplication of code.

3 - Cross-Browser Testing:

Extending the test suite to run on different browsers (Chrome, Firefox) using Cypress plugins or configurations.
Ensuring compatibility and consistency across multiple browser environments.

4 - Parallel Execution:

Configuring Cypress with GitHub Actions and Cypress Dashboard Free version to execute tests in parallel.
Parallel execution improves testing efficiency by distributing tests across multiple environments concurrently.

## Limitations and Considerations

1 - Scope:

- The test suite focuses on critical functionalities and may not cover every edge case or scenario.
- Future iterations may expand coverage to include additional scenarios based on evolving requirements or user feedback.

2 - Maintenance:

- Regular maintenance is essential to keep the test suite up-to-date with changes in the application under test.
- Updates to page structure or functionality may require corresponding adjustments in test scripts and page objects.

3 - Environment Dependencies:

- Test execution may be influenced by factors such as network latency or server response times.
- Consideration should be given to environment stability and consistency to ensure reliable test results.

4 - Performance:

- As the test suite grows in size, performance optimizations may be necessary to maintain reasonable execution times.
Monitoring test execution metrics and identifying bottlenecks can help improve overall performance.


## Page Object Model (POM) Design

This test suite is implemented using the Page Object Model (POM) design pattern. POM enhances test maintainability and readability by separating the test logic from the page-specific elements and actions. Here's how it works:

- **Pages**: Each web page or component is represented by a separate page object. These page objects encapsulate the page-specific elements and actions.
  
- **Tests**: Test scripts interact with the web application through these page objects, making the tests more readable and reducing duplication of code.
  
- **Reusable Components**: By encapsulating page-specific logic within page objects, it becomes easier to reuse code across multiple tests.

This design pattern promotes better organization and maintainability of the test suite, making it easier to scale and extend as the application grows. 


# Installing

A step by step series of examples that tell you how to run tests with a gui.

- Run the following commands:

```bash
> git clone git@github.com:fadirazouk/Automation-Exercise
> cd Automation-Exercise
/Automation-Exercise> npm install
/Automation-Exercise> npm run cypress:gui
```

- To run the test in headless mode please using the following:

```bash
> git clone git@github.com:fadirazouk/Automation-Exercise.git
> cd Automation-Exercise
/Automation-Exercise> npm install
/Automation-Exercise> npm run cypress:test-headless
```

- To run the test in headless mode please using the following:
```bash
> git clone git@github.com:fadirazouk/Automation-Exercise.git
> cd Automation-Exercise
/Automation-Exercise> npm install
/Automation-Exercise> npm run cy:parallel
```
This will run the tests on 2 instances of Cypress, you are modify this by changing the number in package.json, and you can also change what tests should run.

## Parallel Execution with GitHub Actions and Cypress Dashboard

This test suite utilizes GitHub Actions along with the Cypress Dashboard Free version to enable parallel execution of tests. Here's how it works:

- **GitHub Actions**: GitHub Actions is used to automate the testing process. It allows for seamless integration of automated tests into the development workflow.

- **Cypress Dashboard**: The Cypress Dashboard Free version is utilized to orchestrate and manage the execution of tests in parallel. It provides insights into test runs, including test results and performance metrics.

- **Parallel Execution**: By leveraging GitHub Actions and Cypress Dashboard, tests are executed concurrently across multiple environments or browsers, improving testing efficiency and reducing overall execution time.

This setup enables the continuous integration and delivery of high-quality software, ensuring robustness and reliability of the application under test.
Here are few examples :

- Chrome : https://cloud.cypress.io/projects/qsxt94/runs/2/overview?roarHideRunsWithDiffGroupsAndTags=1
- FireFox : https://cloud.cypress.io/projects/qsxt94/runs/3/overview?roarHideRunsWithDiffGroupsAndTags=1

  ## Folder Structure

The automation test suite follows a structured directory layout to organize test scripts, page objects, fixtures, configuration files, and other related resources. Below is an overview of the folder structure:

.                                                                                                                  
├── cypress/                                                                                                                                                                            
│  ├── fixtures/ # Contains JSON fixtures for test data                                                                                                                                 
│  ├── e2e/ # Houses test scripts organized by feature or functionality                                                                                                                 
│  │  ├── login/ # Test scripts related to user authentication                                                                                                                          
│  │  ├── cart/ # Test scripts related to cart management                                                                                                                               
│  │  ├── checkout/ # Test scripts related to the checkout process                                                                                                                      
│  │  └── product/ # Test scripts related to product browsing                                                                                                                           
│  ├── plugins/ # Cypress plugins directory                                                                                                                                             
│  ├── support/ # Custom commands and utility functions                                                                                                                                 
│  └── screenshots/ # Screenshots captured during test execution (optional)                                                                                                             
├── cypress.json # Cypress configuration file                                                                                                                                           
└── README.md # This README file                                                                                                                                                        

- **cypress/fixtures/**: This directory contains JSON fixtures used for data-driven testing, such as login credentials or product details.

- **cypress/e2e/**: Test scripts are organized within subdirectories based on feature or functionality, making it easy to locate and maintain tests.

- **cypress/plugins/**: Cypress plugins directory where custom plugins can be added to extend Cypress functionality.

- **cypress/support/**: Houses custom commands and utility functions used across test scripts for code reusability and maintainability.

- **cypress.json**: Configuration file for Cypress, where global configuration options are specified.

- **README.md**: This README file provides an overview of the automation test suite and its folder structure.

The structured folder layout enhances the organization and maintainability of the test suite, making it easier to navigate, understand, and extend as the application grows.

