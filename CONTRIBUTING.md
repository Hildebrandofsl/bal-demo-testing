# Contributing to FullStack Template

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, please include:

- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, Node.js version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- A clear and descriptive title
- A detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/fullstack-template.git`
3. Install dependencies: `npm install`
4. Set up your environment variables (see `.env.example`)
5. Set up the database: `npm run db:push`
6. Start the development server: `npm run dev`

### Pull Request Process

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Add tests if applicable
4. Ensure all tests pass
5. Update documentation if needed
6. Commit your changes with clear, descriptive messages
7. Push to your fork: `git push origin feature/your-feature-name`
8. Submit a pull request

### Coding Standards

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use proper error handling

### Database Changes

When making database changes:

1. Modify the schema in `shared/schema.ts`
2. Update the storage interface in `server/storage.ts`
3. Run `npm run db:push` to apply changes
4. Update documentation if needed

### Testing

- Write tests for new features
- Ensure existing tests still pass
- Test both frontend and backend changes
- Test database operations

### Documentation

- Update the README.md if needed
- Add JSDoc comments to functions
- Update API documentation for endpoint changes
- Include usage examples

## Questions?

Feel free to create an issue with the "question" label if you need help or clarification.