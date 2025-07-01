"use client";

import { useState, useMemo } from "react";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  viewSearchKey?: string;
  isDoctor?: boolean; // New prop to check if source is from doctors
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  viewSearchKey,
  isDoctor = false, // Default to false
}: DataTableProps<TData, TValue>) {
  const [subscriptionFilter, setSubscriptionFilter] = useState<
    "all" | "subscribed" | "unsubscribed"
  >("all");

  // Filter data based on subscription status
  const filteredData = useMemo(() => {
  if (subscriptionFilter === "all") return data;

  return data.filter((item: any) => {
    const status = item?.subscription?.status;

    if (subscriptionFilter === "subscribed") {
      return status === "Active";
    }

    if (subscriptionFilter === "unsubscribed") {
      return status === "Not Subscribed" || !status;
    }

    return true;
  });
}, [data, subscriptionFilter]);


  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder={`Search ${viewSearchKey}...`}
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="w-full md:max-w-sm"
        />

        {isDoctor && (
          <Tabs
            defaultValue="all"
            value={subscriptionFilter}
            onValueChange={(value) =>
              setSubscriptionFilter(
                value as "all" | "subscribed" | "unsubscribed"
              )
            }
            className="w-full md:w-auto"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="subscribed">Subscribed</TabsTrigger>
              <TabsTrigger value="unsubscribed">Unsubscribed</TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>

      <ScrollArea className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]">
        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
