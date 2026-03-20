# Config Editor Help

## Data Flow

![Config Flow](https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IEMgYXMgQ29uZmlnIEVkaXRvcgogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCiAgICBwYXJ0aWNpcGFudCBEQiBhcyBDZXJuZXIgRGF0YWJhc2UKICAgIHBhcnRpY2lwYW50IEYgYXMgZGVmYXVsdHMuanNvbgoKICAgIE5vdGUgb3ZlciBDLEY6IEFwcCBTdGFydHVwCiAgICBGLT4+QzogTG9hZCBkZWZhdWx0cy5qc29uIChmYWN0b3J5IHNlZWQpCiAgICBMUy0+PkM6IExvYWQgdXNlciBjdXN0b21pemF0aW9ucwogICAgQy0+PkM6IE1lcmdlIChsb2NhbFN0b3JhZ2Ugd2lucykKCiAgICBOb3RlIG92ZXIgVSxMUzogRXhwb3J0IHRvIEZpbGUKICAgIFUtPj5DOiBDbGljayBFeHBvcnQKICAgIEMtPj5DOiBBc3NlbWJsZSBmdWxsIGJ1bmRsZSAoYWxsIHR5cGVzICsgc2VydmljZXMpCiAgICBDLS0+PlU6IERvd25sb2FkIGR3c3YtYnVuZGxlLmpzb24KCiAgICBOb3RlIG92ZXIgVSxMUzogSW1wb3J0IGZyb20gRmlsZQogICAgVS0+PkM6IENsaWNrIEltcG9ydCArIHNlbGVjdCBmaWxlCiAgICBDLT4+QzogUGFyc2UgSlNPTiBidW5kbGUKICAgIEMtPj5MUzogU2F2ZSBwYXJhbWV0ZXIgdHlwZXMgKyBzZXJ2aWNlcwogICAgQy0tPj5VOiBTaG93IGltcG9ydCBzdGF0cwoKICAgIE5vdGUgb3ZlciBVLERCOiBTYXZlIHRvIERhdGFiYXNlCiAgICBVLT4+QzogQ2xpY2sgU2F2ZQogICAgQy0+PkM6IEFzc2VtYmxlIGZ1bGwgYnVuZGxlCiAgICBDLT4+REI6IERNSW5mbyB3cml0ZSAoRFdTVi9BUFBfQ09ORklHKQogICAgREItLT4+QzogU3VjY2VzcwogICAgQy0tPj5VOiBDb25maXJtYXRpb24gbWVzc2FnZQoKICAgIE5vdGUgb3ZlciBVLERCOiBMb2FkIGZyb20gRGF0YWJhc2UKICAgIFUtPj5DOiBDbGljayBMb2FkCiAgICBDLT4+REI6IERNSW5mbyByZWFkIChEV1NWL0FQUF9DT05GSUcpCiAgICBEQi0tPj5DOiBKU09OIGJ1bmRsZQogICAgQy0+PkxTOiBJbXBvcnQgdHlwZXMgKyBzZXJ2aWNlcwogICAgQy0tPj5VOiBTaG93IGltcG9ydCBzdGF0cwoKICAgIE5vdGUgb3ZlciBVLEY6IFJlc2V0IEFsbAogICAgVS0+PkM6IENsaWNrIFJlc2V0IEFsbAogICAgQy0+PkxTOiBDbGVhciBhbGwgdXNlciBkYXRhCiAgICBDLT4+RjogUmVsb2FkIGRlZmF1bHRzLmpzb24KICAgIEMtLT4+VTogUmVzdG9yZWQgdG8gZGVmYXVsdHMK)

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
