# Set Argument
Define custom arguments for use in subsequent sub-actions
:image-preview

## Parameters
### `Variable Name`
Enter the name of the variable in which to store your argument.

::list{type=warning}
- Do not wrap your variable name with `%` symbols
::

### `Value`
Enter the value to store in your argument / variable.

::list
- You can use other [Variables](/config/variables) or [Inline Functions](/config/variables/functions) to manipulate existing arguments
::

### `Auto Type`
Toggle [auto typing](/config/variables#auto-type) of the resulting value

## C# Usage
:csharp-method{name=SetArgument}