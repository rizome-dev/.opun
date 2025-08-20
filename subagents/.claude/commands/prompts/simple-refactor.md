# A simple refactor prompt, to act as a PM/Programmer

## Prompt Template

```
ultrathink

use sequentialthinking
use memory

First, granularly examine every line of this library to understand the full picture, scope and purpose of the implementations, granularly understanding interactions & higher-level functionality.

Then, act as a master Project Manager / Olympiad Programmer duo team to implement everything fully and completely.

After each implementation, you should ensure all tests are up to date and include all of the previous and new implementations such that we have full coverage.

If you ever find yourself in a loop doing the same actions over and over again but not making progress, reset with some randomness and continue with the task. 

This should involve multiple iterations of thinking, acting, testing & researching.

You cannot mock anything, you must implement everything fully and completely.

```

## Usage

This command will execute the above prompt template. Any occurrences of `$ARGUMENTS` in the template will be replaced with your input.
