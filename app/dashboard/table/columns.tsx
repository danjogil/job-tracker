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
    accessorKey: "company",
    header: () => <div className="">Company</div>,
    cell: ({ row }) => {
      const company: string = row.getValue("company");

      return <div className="font-bold">{company}</div>;
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="hidden md:block">Title</div>,
    cell: ({ row }) => {
      const title: string = row.getValue("title");

      return <div className="font-medium hidden md:block">{title}</div>;
    },
  },
  {
    accessorKey: "salary",
    header: () => <div className="hidden md:block">Salary</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("salary"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="font-medium hidden md:block">{formatted}</div>;
    },
  },
  {
    accessorKey: "location",
    header: () => <div className="hidden md:block">Location</div>,
    cell: ({ row }) => {
      const location: string = row.getValue("location");

      return <div className="font-medium hidden md:block">{location}</div>;
    },
  },
  {
    accessorKey: "dateApplied",
    header: () => <div className="hidden md:block">Date</div>,
    cell: ({ row }) => {
      const dateApplied: string = row.getValue("dateApplied");

      return <div className="font-medium hidden md:block">{dateApplied}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="hidden md:block">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div className="font-bold capitalize hidden md:block">
          {status.toLowerCase()}
        </div>
      );
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
