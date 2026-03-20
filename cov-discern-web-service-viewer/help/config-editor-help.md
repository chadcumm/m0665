# Config Editor Help

## Overview

Edit the app's configuration as raw JSON. Changes are applied to localStorage when you click Apply.

## Sections

| Section | Description |
|---------|-------------|
| **Parameter Library** | Custom parameter types (localStorage key: dwsv_parameter_library) |
| **Parameter Overrides** | Overrides applied to built-in parameter types (dwsv_parameter_overrides) |
| **Service Registry** | Custom service definitions (dwsv_service_registry) |
| **Full Bundle** | Combined export of all custom types, overrides, and services |

## Views

- **Code** -- Raw JSON text editor. Edit directly, format with the Format button.
- **Tree** -- Interactive tree view. Expand/collapse nodes, edit values inline.

## Applying Changes

Click **Apply** to write changes to localStorage. The app will reload the affected data immediately. For Full Bundle mode, both parameter types and services are updated.

**Warning:** Invalid JSON cannot be applied. Fix syntax errors first.
