# Executor Help

## Process Flow

![Executor Flow](https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IEUgYXMgRXhlY3V0b3IKICAgIHBhcnRpY2lwYW50IFMgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgUCBhcyBQYXJhbWV0ZXIgTGlicmFyeQogICAgcGFydGljaXBhbnQgQ0NMIGFzIENDTCBFbmdpbmUKICAgIHBhcnRpY2lwYW50IEggYXMgSGlzdG9yeQoKICAgIFUtPj5FOiBTZWxlY3QgU2VydmljZQogICAgRS0+PlM6IGdldFNlcnZpY2UoaWQpCiAgICBTLS0+PkU6IFNlcnZpY2UgRGVmaW5pdGlvbgogICAgRS0+PlA6IFJlc29sdmUgcGFyYW1ldGVyIHR5cGVzCiAgICBQLS0+PkU6IFBhcmFtZXRlciBmb3JtcyByZW5kZXJlZAoKICAgIFUtPj5FOiBGaWxsIHBhcmFtZXRlcnMKICAgIFUtPj5FOiBDbGljayBFeGVjdXRlCgogICAgYWx0IFJhdyBNb2RlCiAgICAgICAgRS0+PkNDTDogWE1MQ2NsUmVxdWVzdChwcm9ncmFtLCBecGFyYW1zXikKICAgIGVsc2UgQ2xpbmljYWwgT2ZmaWNlIE1vZGUKICAgICAgICBFLT4+Q0NMOiBDdXN0b21TZXJ2aWNlLmxvYWQocGF5bG9hZCkKICAgIGVuZAoKICAgIENDTC0tPj5FOiBKU09OIFJlc3BvbnNlCiAgICBFLT4+SDogU2F2ZSB0byBoaXN0b3J5IChsb2NhbFN0b3JhZ2UpCiAgICBFLS0+PlU6IERpc3BsYXkgaW4gSlNPTiBWaWV3ZXIK)

## Service Selector

The **Service** dropdown lists all registered CCL web services — both built-in and custom. Select a service to load its parameter form.

- **Program name** is the actual CCL program that will be called (e.g., `cov_doc_activity_extract`)
- **Description** explains what data the service returns

## Parameters

Each service defines a set of positional parameters. The form renders the appropriate input for each one.

### Field Types

| Type | Description |
|------|-------------|
| **Text** | Free-text input. Type any string value. |
| **Select** | Dropdown with predefined options. Choose from the list. |
| **DateTime** | Date and time picker. Quick presets available (Today Start, Yesterday Start, Now). |
| **Date** | Date-only picker with presets. |
| **Time** | Time-only picker with presets. |
| **Number** | Numeric input. Sent unquoted to CCL (no ^caret^ wrapping). |
| **Hidden** | Not shown in the form. Uses its default value automatically (e.g., Output Device). |

### Required vs Optional

- Fields marked with a red **\*** are required
- Optional fields can be left empty — they are sent as `^^` (empty carets) to CCL
- Default values are pre-populated from the parameter library or service definition

### How Parameters Are Sent

In **Raw mode**, parameters are assembled into a positional string:
```
^MINE^,^ClinicalDoc^,^^,^CMC^,^19-MAR-2026 00:00:00^,^19-MAR-2026 23:59:59^
```

- String values are wrapped in `^carets^`
- Numeric values (like file_output) are sent bare: `1` not `^1^`
- Empty optional parameters are sent as `^^`
- Order matters — parameters are sorted by their position number

In **Clinical Office mode**, parameters are sent as named key-value pairs to the CustomService framework.

## Execution Modes

### Raw Mode
Uses the native `XMLCclRequest` object available in PowerChart/DiscernReportViewer. This is the most direct way to call a CCL program — it sends the positional parameter string exactly as CCL expects it.

**Use Raw mode when:**
- Testing any CCL script for the first time
- You need exact control over the parameter string
- The CCL script was written for positional prompt invocation

### Clinical Office Mode
Uses the Clinical Office `CustomService` framework, which provides automatic JSON parsing, error handling, and Reference Service support.

**Use Clinical Office mode when:**
- You want to collect Reference Service metadata about the response fields
- The CCL script supports Clinical Office named parameter mapping
- You need patient context binding (personId/encntrId)

**Note:** Clinical Office mode requires the framework to be initialized. The button will be disabled if the framework is not ready.

### Include Reference
When checked (Clinical Office mode only), adds `reference: true` to the execution payload. This tells the CCL script to return metadata about its fields instead of (or in addition to) actual data. Reference data appears in the MPage log.

## Load Reference Button

Loads the Clinical Office Reference Service data for all built-in services (Address, Allergy, Diagnosis, Encounter, Organization, Person, Phone, Problem, Prsnl). Results are logged to the **MPage Log** panel at the bottom of the screen.

This is for exploring what field metadata is available — it does not affect normal service execution.

## Results Panel

After execution, the right panel shows the response.

### Status Indicators
- **Success** (green) — CCL script returned data successfully
- **Failed** (red) — An error occurred (network, parse, or CCL error)

### Metadata
- **Duration** — How long the execution took in milliseconds
- **Mode badge** — "Raw" or "CO" indicating which engine was used
- **Parameter string** — The exact parameters that were sent

### JSON Viewer Modes

| Mode | Description |
|------|-------------|
| **Tree** | Interactive expandable/collapsible tree view. Click nodes to expand. Search and copy paths. |
| **Code** | Syntax-highlighted raw JSON text. Best for copying the full response. |
| **Table** | Auto-detects arrays in the response and renders them as sortable tables. Use the dropdown to select which array to view. Nested arrays are expandable. |

## History

Click **History** to open the execution history drawer (last 50 executions).

- **Green dot** = successful execution
- **Red dot** = failed execution
- **Mode badge** = "Raw" or "CO"
- Click any entry to reload its result in the viewer
- **Clear** removes all history from memory and localStorage
