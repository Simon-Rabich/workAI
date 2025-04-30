# # AI.Work Automation Test (Playwright)

## 📋 Prerequisites

  ```bash

  install:
  npm install -D @playwright/test
  npx playwright install

  run:
  nvm use 18             
  
  run a test in the playground UI:
  npx playwright test tests/login-google-sso.spec.ts --headed      

  run a test unit in headless:
  npx playwright test signup.spec.ts   

  run all tests in headless mode:
  npx playwright test                            


