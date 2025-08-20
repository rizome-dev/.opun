# Built-in review-template

*Author: system*

*Tags: review, template, quality*

## Prompt Template

```
# Code Review

## Changes Summary
{{changes_summary}}

## Review Checklist
- [ ] Code follows project conventions
- [ ] Tests are comprehensive and passing
- [ ] Documentation is updated
- [ ] No security vulnerabilities introduced
- [ ] Performance impact is acceptable

## Detailed Review

### Architecture
[Review architectural decisions]

### Code Quality
[Review code quality aspects]

### Testing
[Review test coverage and quality]

## Recommendations
[Provide specific recommendations for improvement]
```

## Usage

This command will execute the above prompt template. Any occurrences of `$ARGUMENTS` in the template will be replaced with your input.
