# Automation Playwright POM

A robust test automation framework built with Playwright and TypeScript, implementing the Page Object Model (POM) pattern for scalable and maintainable end-to-end testing.

## 🚀 Features

- **Page Object Model (POM)** - Clean separation of test logic and page elements
- **TypeScript Support** - Type-safe test development
- **Multi-browser Testing** - Support for Chromium, Firefox, and WebKit
- **Database Integration** - Prisma ORM for test data management
- **Environment Configuration** - Flexible configuration for different environments
- **Rich Reporting** - HTML, JSON, and JUnit reports
- **CI/CD Ready** - Optimized for continuous integration pipelines

## 📋 Prerequisites

- Node.js (>= 18.0.0)
- npm or yarn
- PostgreSQL database (for test data management)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd automation-playwright-pom
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
BASE_URL=https://your-app-url.com
ENVIRONMENT=development

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/qa_automation_db
DB_HOST=localhost
DB_PORT=5432
DB_NAME=qa_automation_db
DB_USER=username
DB_PASSWORD=password

# Test Configuration
HEADLESS=true
BROWSER=chromium
TIMEOUT=30000
RETRIES=2
WORKERS=4
TEST_USERNAME=your-test-username
TEST_PASSWORD=your-test-password

# API Endpoints
API_BASE_URL_IMPORTACION_DEV=https://api-dev.example.com
API_BASE_URL_GEO_DEV=https://geo-api-dev.example.com
GEO_X_API_KEY=your-api-key
```

## 🏗️ Project Structure

```
automation-playwright-pom/
├── src/
│   ├── config/
│   │   └── environment.ts          # Environment configuration
│   ├── pages/
│   │   ├── base/
│   │   │   └── BasePage.ts         # Base page class
│   │   └── LoginPage.ts            # Login page object
│   └── testData/
│       └── importacionData.json    # Test data files
├── tests/
│   ├── e2e/
│   │   └── web/
│   │       └── loginTest.spec.ts   # Test specifications
│   └── setup/
│       ├── global-setup.ts         # Global test setup
│       └── global-teardown.ts      # Global test teardown
├── prisma/
│   └── schema.prisma               # Database schema
├── playwright.config.ts            # Playwright configuration
└── package.json
```

## 🧪 Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in headed mode:
```bash
npm run test:headed
```

### Run specific test file:
```bash
npx playwright test tests/e2e/web/loginTest.spec.ts
```

### Run tests with specific browser:
```bash
npx playwright test --project=chromium
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

## 📊 Reports

After running tests, you can view reports:

### HTML Report:
```bash
npx playwright show-report
```

Reports are generated in:
- `playwright-report/` - HTML report
- `test-results/` - JSON and JUnit reports

## 🔧 Development

### Adding New Page Objects

1. Create a new page class extending `BasePage`:

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class YourPage extends BasePage {
  private readonly yourElement: Locator;

  constructor(page: Page) {
    super(page);
    this.yourElement = page.locator('#your-element');
  }

  public async yourMethod(): Promise<void> {
    // Implementation
  }
}
```

2. Create corresponding test file in `tests/e2e/web/`

### Database Operations

Use Prisma client for database operations:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Your database operations
```

## 🚀 CI/CD Integration

The framework is optimized for CI/CD with:
- Parallel test execution
- Retry mechanisms
- Multiple report formats
- Environment-specific configurations

### GitHub Actions Example:

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
```

## 📝 Best Practices

1. **Page Objects**: Keep page objects focused and maintainable
2. **Test Data**: Use external data files for test inputs
3. **Assertions**: Use meaningful assertion messages
4. **Waits**: Prefer explicit waits over implicit ones
5. **Environment**: Use environment-specific configurations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions and support, please:
- Check the documentation
- Review existing issues
- Create a new issue with detailed information

## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Prisma Documentation](https://www.prisma.io/)
