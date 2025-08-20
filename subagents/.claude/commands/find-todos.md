# Find TODOs

Search for TODO comments in code files

## Command

```bash
rg --type-add 'code:*.{js,ts,go,py,java,rs,cpp,c,h}' -t code 'TODO|FIXME|HACK|XXX|BUG' -n $ARGUMENTS
```

Execute this system command with the provided arguments.

## Category

Category: development
