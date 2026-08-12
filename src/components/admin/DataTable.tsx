import { Search } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/common/EmptyState";

export interface Column<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  className?: string | undefined;
}

interface DataTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  searchKeys: (row: T) => string;
  filter?:
    | {
        label: string;
        options: string[];
        match: (row: T, value: string) => boolean;
      }
    | undefined;
  pageSize?: number | undefined;
  emptyTitle?: string | undefined;
}

export function DataTable<T extends { id: string }>({
  rows,
  columns,
  searchKeys,
  filter,
  pageSize = 6,
  emptyTitle = "No records found",
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      const matchesQuery = searchKeys(row).toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filterValue === "all" || !filter || filter.match(row, filterValue);
      return matchesQuery && matchesFilter;
    });
  }, [rows, query, filterValue, filter, searchKeys]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <div className="relative min-w-0 sm:max-w-xs sm:flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search records"
            aria-label="Search records"
            className="pl-9"
          />
        </div>
        {filter && (
          <Select
            value={filterValue}
            onValueChange={(v) => {
              setFilterValue(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-full sm:w-52" aria-label={filter.label}>
              <SelectValue placeholder={filter.label} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All — {filter.label}</SelectItem>
              {filter.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {visible.length === 0 ? (
        <EmptyState title={emptyTitle} description="Try adjusting your search or filter." />
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/60">
                {columns.map((col) => (
                  <TableHead key={col.key} className={col.className}>
                    {col.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visible.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col) => (
                    <TableCell key={col.key} className={col.className}>
                      {col.render(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          Showing {visible.length} of {filtered.length} demo records
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled={current === 1} onClick={() => setPage(current - 1)}>
            Previous
          </Button>
          <span className="px-1">
            Page {current} / {pageCount}
          </span>
          <Button variant="outline" size="sm" disabled={current === pageCount} onClick={() => setPage(current + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
