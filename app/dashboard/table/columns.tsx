import { ColumnDef } from "@tanstack/react-table";

export type Job = {
  title: string | null;
  company: string | null;
  salary: string | null;
  location: string | null;
  dateApplied: string;
  status:
    | "APPLYING"
    | "APPLIED"
    | "REJECTED"
    | "INTERVIEWING"
    | "NEGOTIATING"
    | "ACCEPTED";
};

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "dateApplied",
    header: "Date Applied",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
