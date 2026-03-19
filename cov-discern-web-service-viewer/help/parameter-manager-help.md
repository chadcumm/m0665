# Parameter Manager Help

## Overview

The Parameter Manager lets you view, create, and customize reusable parameter type definitions. These types are referenced by service definitions to control what inputs appear on the Executor page.

## Parameter List

The left panel shows all parameter types — both built-in and custom.

### Built-in vs Custom

- **Built-in** parameter types ship with the application. You can override their labels, descriptions, defaults, and options, but you cannot delete them or change their key.
- **Custom** parameter types are created by you and stored in localStorage. They persist across sessions but are local to your browser.

## Parameter Type Fields

### Always Shown

| Field | Description |
|-------|-------------|
| **Key** | Unique identifier used by service definitions to reference this type. Cannot be changed on built-in types. Auto-generated from label for new types. |
| **Label** | Display name shown in the Executor form (e.g., "Facility", "FIN"). |
| **Input Type** | Controls the form input: `text`, `select`, `datetime`, `date`, `time`, `number`, `hidden`. |
| **Description** | Help text shown below the input in the Executor form. |
| **Default Value** | Pre-populated value when no user input is provided. |
| **Placeholder** | Placeholder text shown in empty text/number inputs. |

### Checkboxes

| Field | Description |
|-------|-------------|
| **Allow Empty** | Whether an empty string is a valid value. Used for optional positional parameters. |
| **Unquoted** | Send the value without ^caret^ wrapping. Used for numeric CCL prompts (i2, i4, f8). |

### Select Options (when Input Type is "select")

Define the dropdown choices as label/value pairs:
- **Label** — What the user sees in the dropdown
- **Value** — What gets sent to CCL

Example: Label "CMC - Covenant Medical Center" sends value "CMC".

### Presets (when Input Type is datetime/date/time)

Quick-select buttons that auto-fill the datetime picker:
- **Label** — Button text (e.g., "Today Start")
- **Preset Key** — Named preset resolved at runtime: `today_start`, `today_end`, `yesterday_start`, `yesterday_end`, `now`

## Editing Built-in Types

You can customize built-in parameter types by overriding specific fields. An info banner shows when a type has been overridden. Click **Reset to Default** to remove all overrides and restore the original definition.

**What you can override:** Label, description, default value, placeholder, options, presets, allow empty, unquoted.

**What you cannot change:** The key (it's the identity link used by service parameter bindings).

## Creating Custom Types

Click **+ New** to create a custom parameter type. Fill in the key, label, and input type at minimum. The key auto-generates from the label but can be manually edited. Keys must be unique across all types (built-in + custom).

## How Parameters Connect to Services

1. **Parameter Library** defines reusable types (this page)
2. **Service definitions** reference types by key and assign positions
3. **Executor form** renders inputs based on the parameter type's configuration
4. **Values** are encoded into the CCL parameter string using the type's rules (quoting, format, etc.)

When you add a new parameter type here, it becomes available in the Service Manager's "Add Parameter" dropdown for any service definition.
