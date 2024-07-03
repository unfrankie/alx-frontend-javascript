export type RowID = number;

export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
task_3/js/crud.d.ts

typescript
Copy code
import { RowID, RowElement } from './interface';

declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}
