"use client";

import { ColumnDef } from "@tanstack/react-table";

import ActionMenu from "./ActionMenu";

export type Job = {
  id: string;
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
    cell: ({ row }) => {
      const title: string = row.getValue("title");

      return <div className="font-bold">{title}</div>;
    },
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("salary"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
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
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return <div className="font-bold capitalize">{status.toLowerCase()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return <ActionMenu id={id} />;
    },
  },
];
