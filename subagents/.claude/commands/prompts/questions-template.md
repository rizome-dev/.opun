# Built-in questions-template

*Author: system*

*Tags: questions, template, discovery*

## Prompt Template

```
# Clarifying Questions

Based on the provided {{document_type}}, I have the following questions:

## Technical Questions
{{#each technical_questions}}
- {{this}}
{{/each}}

## Business/Requirements Questions
{{#each business_questions}}
- {{this}}
{{/each}}

## Implementation Questions
{{#each implementation_questions}}
- {{this}}
{{/each}}

Please provide answers to help create a comprehensive implementation plan.
```

## Usage

This command will execute the above prompt template. Any occurrences of `$ARGUMENTS` in the template will be replaced with your input.
