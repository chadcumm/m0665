# Service Manager Help

## Process Flow

![Service Manager Flow](https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IFNNIGFzIFNlcnZpY2UgTWFuYWdlcgogICAgcGFydGljaXBhbnQgU1IgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IEVkaXQgU2VydmljZQogICAgVS0+PlNNOiBTZWxlY3Qgc2VydmljZQogICAgU00tPj5TUjogZ2V0U2VydmljZShpZCkKICAgIFNSLS0+PlNNOiBTZXJ2aWNlIGRlZmluaXRpb24KICAgIFNNLS0+PlU6IFNob3cgZWRpdGFibGUgZm9ybQogICAgVS0+PlNNOiBDaGFuZ2UgZmllbGQgdmFsdWUKICAgIFNNLT4+U1I6IHNhdmVTZXJ2aWNlKHVwZGF0ZWQpCiAgICBTUi0+PkxTOiBQZXJzaXN0IHRvIGxvY2FsU3RvcmFnZQoKICAgIE5vdGUgb3ZlciBVLExTOiBBZGQgTmV3IFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgKyBOZXcKICAgIFNNLS0+PlU6IFNob3cgYmxhbmsgZm9ybQogICAgVS0+PlNNOiBGaWxsIGZpZWxkcyArIGFkZCBwYXJhbXMKICAgIFUtPj5TTTogQ2xpY2sgU2F2ZQogICAgU00tPj5TUjogc2F2ZVNlcnZpY2UobmV3KQogICAgU1ItPj5MUzogUGVyc2lzdCB0byBsb2NhbFN0b3JhZ2UKCiAgICBOb3RlIG92ZXIgVSxMUzogRGVsZXRlIFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgRGVsZXRlCiAgICBTTS0+PlNSOiBkZWxldGVTZXJ2aWNlKGlkKQogICAgYWx0IERlZmF1bHQgc2VydmljZQogICAgICAgIFNSLT4+TFM6IFRyYWNrIGFzIGRlbGV0ZWQgZGVmYXVsdAogICAgZWxzZSBDdXN0b20gc2VydmljZQogICAgICAgIFNSLT4+TFM6IFJlbW92ZSBmcm9tIHN0b3JhZ2UKICAgIGVuZAoKICAgIE5vdGUgb3ZlciBVLExTOiBSZXNldCBEZWZhdWx0CiAgICBVLT4+U006IENsaWNrIFJlc2V0IHRvIERlZmF1bHQKICAgIFNNLT4+U1I6IHJlc2V0U2VydmljZShpZCkKICAgIFNSLT4+TFM6IFJlbW92ZSB1c2VyIHZlcnNpb24K)

## Overview

The Service Manager lets you view, create, and manage CCL web service definitions. Each service definition maps a CCL program name to a set of typed parameters, so the Executor page can render the correct form and build the parameter string.

## Service List

The left panel shows all registered services.

### Built-in vs Custom

- **Built-in** services ship with the application and cannot be deleted or modified. They cover common Covenant Health CCL scripts.
- **Custom** services are created by you and stored in your browser's localStorage. They persist across sessions but are local to your browser.

### Selecting a Service

Click any service to view its full configuration in the detail panel. The selected service is highlighted with a blue left border.

## Service Detail View

Shows the complete configuration of a selected service:

- **Program Name** — The exact CCL program name that will be called (e.g., `cov_doc_activity_extract`). This must match the CCL object name in Cerner.
- **Description** — Human-readable explanation of what the service does.
- **Parameters** — Ordered list of parameter bindings with their position, type, and required/optional status.

## Adding a New Service

Click **+ New** to create a custom service definition.

### Required Fields

| Field | Description |
|-------|-------------|
| **Program Name** | The CCL program name. Must exactly match the CCL object (case-insensitive in CCL, but use lowercase by convention). |
| **Display Name** | Human-readable name shown in the Executor dropdown. |
| **Description** | What this service does. Shown below the service selector on the Executor page. |

### Adding Parameters

Parameters define what inputs the service expects. Each parameter has:

| Property | Description |
|----------|-------------|
| **Position** | The ordinal position in the CCL parameter list (1-based). Position determines the order parameters are sent. Position 1 is sent first. |
| **Parameter Type** | A reference to a reusable type from the Parameter Library (e.g., `facility`, `fin`, `start_dt_tm`). This controls the input type (text, select, datetime), available options, and default value. |
| **Required** | Whether the parameter must have a value before execution. Required parameters show a red * in the form. |
| **Default Override** | Optionally override the parameter type's default value for this specific service. For example, Output Device defaults to `MINE` but one service might need `JSON`. |

### Parameter Position Ordering

**Position matters.** CCL scripts receive parameters in order: position 1 first, then 2, then 3, etc. If your CCL script expects the FIN as the 3rd parameter, set its position to 3.

Example for a script expecting `outdev, event_set_name, fin, facility`:
1. Output Device (position 1)
2. Event Set Name (position 2)
3. FIN (position 3)
4. Facility (position 4)

### Parameter Types

Parameter types come from the shared Parameter Library. Common types include:

| Type Key | Input | Description |
|----------|-------|-------------|
| `outdev` | Hidden | Output device — usually `MINE` or `JSON` |
| `facility` | Select | Covenant Health facility dropdown |
| `fin` | Text | Patient Financial Number |
| `event_set_name` | Select | Clinical event set hierarchy |
| `start_dt_tm` | DateTime | Start date/time with presets |
| `end_dt_tm` | DateTime | End date/time with presets |
| `person_id` | Number | Patient person ID (sent unquoted) |
| `encntr_id` | Number | Encounter ID (sent unquoted) |
| `generic_text` | Text | Generic text parameter |

## Import / Export

### Export
Click **Export** to download all service definitions (built-in + custom) as a JSON file. Use this to back up your custom services or share them with colleagues.

### Import
Click **Import** to load service definitions from a JSON file. Imported custom services are merged with your existing ones. Built-in services are not affected by imports.

**Tip:** Export from one browser, import in another to share custom service definitions between workstations.

## How Execution Works End-to-End

Here's what happens when you click **Execute** on the Executor page:

1. **Service definition** is looked up from the registry
2. **Parameter form** values are collected (user input + defaults)
3. **Parameter string** is built by sorting parameters by position and encoding each value
4. **CCL call** is made via XMLCclRequest (Raw mode) or CustomService (Clinical Office mode)
5. **JSON response** is parsed (with trailing comma cleanup for Raw mode)
6. **Result** is displayed in the JSON viewer and saved to execution history
7. **History** is persisted to localStorage (last 50 executions)

If the CCL script returns an error or the JSON is malformed, the error message is displayed and the raw response text is available for inspection.
