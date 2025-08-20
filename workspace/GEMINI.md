# GEMINI.md

This file provides system-level guidance for Gemini CLI when working in this Opun session.

## Available Commands via MCP

Since Gemini doesn't support custom slash commands natively, use the MCP tools to access Opun functionality:

### Workflows

- **refactor**: Run code refactoring workflow
  - Handler: refactor-code


### Prompts

- **analyze**: Analyze codebase structure
  - Handler: promptgarden://analyze-code

- **planning-template**: Built-in planning-template
  - Handler: promptgarden://planning-template

- **review-template**: Built-in review-template
  - Handler: promptgarden://review-template

- **questions-template**: Built-in questions-template
  - Handler: promptgarden://questions-template

- **code-review**: Prompt added from code-review.md
  - Handler: promptgarden://code-review

- **simple-refactor**: A simple refactor prompt, to act as a PM/Programmer
  - Handler: promptgarden://simple-refactor

- **hello**: world
  - Handler: promptgarden://hello


### Built-in Commands

- **mcp**: Manage MCP servers


## Using Commands

To execute any of these commands, use the MCP tools:
1. List available tools with the MCP server
2. Execute the desired command through the opun tool
3. For prompts, use the opun tool

## Session Configuration

This is a managed Opun session with the following MCP servers available:

- **opun**: opun

- **memory**: @modelcontextprotocol/server-memory

- **sequential-thinking**: @modelcontextprotocol/server-sequential-thinking

- **context7**: @upstash/context7-mcp

- **apollo-io**: apollo-io-mcp-server

