# Spec-Driven Development (SDD) Workflow

## Overview

This project follows a **Spec-Driven Development** approach where all implementation is guided by specifications defined in the `openspec/` directory. This ensures structured development and clear separation between planning and implementation.

## OpenSpec Structure

```
openspec/
├─ proposal.md          # Technical proposal and architecture
├─ tasks.md             # Detailed task breakdown
├─ changes/             # Version history of specifications
└─ archive/             # Archived specifications
```

## Document Roles

### proposal.md
- **Purpose**: Defines the technical architecture and approach
- **Content**: System architecture, technology stack, database schema, API specification, frontend structure
- **When to update**: Before major implementation phases, when architecture changes
- **Status**: Living document, updated as needed

### tasks.md
- **Purpose**: Breaks down implementation into specific, actionable tasks
- **Content**: Task lists, dependencies, acceptance criteria, checklists
- **When to update**: Continuously as tasks are completed or new tasks are identified
- **Status**: Active working document

### changes/
- **Purpose**: Tracks version history of specification changes
- **Content**: Change logs with dates, reasons, and affected documents
- **When to update**: Every time a specification document is modified
- **Format**: `YYYY-MM-DD-description.md`

### archive/
- **Purpose**: Stores outdated or superseded specifications
- **Content**: Old versions of proposal.md or tasks.md
- **When to update**: When major specification revisions occur

## Workflow Process

### 1. Planning Phase
1. Review `proposal.md` for architecture and technical approach
2. Review `tasks.md` for current task list
3. Identify next task to work on
4. Understand dependencies and requirements

### 2. Implementation Phase
1. Follow the task specification exactly
2. Refer to coding standards in `.cursor/rules/coding-standards.md`
3. Use patterns from `.cursor/skills/` when applicable
4. Implement code manually (no AI-generated executable code)

### 3. Documentation Phase
1. Update `tasks.md` to mark completed tasks
2. Document any deviations or discoveries in `changes/`
3. Update relevant documentation in `docs/` if needed
4. Commit changes with clear messages

## Specification Update Rules

### When to Update proposal.md
- Architecture changes
- Technology stack modifications
- API endpoint additions/changes
- Database schema changes
- Frontend structure changes

### When to Update tasks.md
- Task completion
- New task identification
- Task dependency changes
- Acceptance criteria updates

### How to Document Changes
1. Create a new file in `changes/` directory
2. Format: `YYYY-MM-DD-brief-description.md`
3. Include:
   - Date of change
   - Reason for change
   - Affected documents
   - Summary of changes

Example:
```markdown
# Change Log: 2024-01-15-frontend-partials-structure

**Date**: 2024-01-15
**Reason**: Added HTML partials architecture requirement
**Affected**: proposal.md, tasks.md

## Changes
- Added requirement for HTML partials structure
- Updated frontend architecture section
- Added tasks for implementing partials
```

## Integration with Cursor AI

### AI Usage Guidelines
- **Planning**: AI can help with planning and documentation
- **Specification**: AI can assist in writing specifications
- **Code Generation**: AI should NOT generate executable code
- **Code Review**: AI can help review and suggest improvements

### Cursor Rules Integration
- Cursor rules in `.cursor/rules/` enforce SDD principles
- Skills in `.cursor/skills/` provide implementation patterns
- All code must align with specifications

## Task Management

### Task States
- **Pending**: Not yet started
- **In Progress**: Currently being worked on
- **Completed**: Finished and verified
- **Blocked**: Waiting on dependencies

### Task Dependencies
- Always check dependencies before starting a task
- Update task status when dependencies are resolved
- Document blocking issues in task notes

### Acceptance Criteria
- Each task must have clear acceptance criteria
- Code must meet all criteria before marking complete
- Review criteria before starting implementation

## Version Control

### Commit Messages
- Reference task numbers when applicable
- Describe what was implemented
- Mention specification updates if any

Example:
```
feat: implement product list display

- Add product list rendering in ui.js
- Implement product card component with BEM classes
- Update tasks.md: mark task #3 as completed
```

### Branch Strategy
- Work on feature branches when possible
- Merge to main after task completion
- Keep commits atomic and focused

## Quality Assurance

### Before Marking Task Complete
1. Code follows coding standards
2. All acceptance criteria met
3. Code tested manually
4. Documentation updated if needed
5. No linter errors
6. Specification alignment verified

### Review Process
1. Self-review against specifications
2. Check against coding standards
3. Verify BEM naming conventions
4. Test functionality
5. Update task status

## Best Practices

1. **Read before coding**: Always review relevant specifications before starting
2. **Update as you go**: Keep tasks.md updated during development
3. **Document deviations**: If you deviate from spec, document why in changes/
4. **Stay aligned**: Regularly check that implementation matches specifications
5. **Ask questions**: If spec is unclear, clarify before implementing
