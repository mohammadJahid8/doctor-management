'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';

interface AppointmentsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  userRole: string;
}

export function AppointmentsDataTable<TData, TValue>({
  columns,
  userRole,
}: AppointmentsDataTableProps<TData, TValue>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { appointmentRefetch } = useAppContext();

  // State for data and loading
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });

  // Get current URL parameters
  const currentPage = parseInt(searchParams.get('page') || '1');
  const currentLimit = parseInt(searchParams.get('limit') || '10');
  const currentSearch = searchParams.get('search') || '';
  const currentDateFilter = searchParams.get('dateFilter') || 'today';
  const currentSortBy = searchParams.get('sortBy') || 'createdAt';
  const currentSortOrder = searchParams.get('sortOrder') || 'desc';

  // Local state for search input
  const [searchInput, setSearchInput] = useState(currentSearch);

  // Update URL parameters
  const updateURL = (params: Record<string, string | number>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        current.set(key, value.toString());
      } else {
        current.delete(key);
      }
    });

    const search = current.toString();
    const query = search ? `?${search}` : '';

    if (typeof window !== 'undefined') {
      router.push(`${window.location.pathname}${query}`);
    }
  };

  // Fetch appointments data
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: currentLimit.toString(),
        sortBy: currentSortBy,
        sortOrder: currentSortOrder,
      });

      queryParams.append('dateFilter', currentDateFilter);

      // Add search parameter if exists (searching by patient name)
      if (currentSearch) {
        queryParams.append('patientName', currentSearch);
      }
      // console.log({ queryParams: queryParams.toString() });

      const response = await api.get(`/appointment?${queryParams.toString()}`);

      if (response.data.success) {
        setData(response.data.data || []);
        setMeta(
          response.data.meta || {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 1,
          }
        );
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when URL parameters change or when appointmentRefetch changes
  useEffect(() => {
    fetchAppointments();
  }, [
    currentPage,
    currentLimit,
    currentSearch,
    currentDateFilter,
    currentSortBy,
    currentSortOrder,
    appointmentRefetch,
  ]);

  // Update search input when URL changes
  useEffect(() => {
    setSearchInput(currentSearch);
  }, [currentSearch]);

  // Handle search
  const handleSearch = () => {
    updateURL({ search: searchInput, page: 1 });
  };

  // Handle search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle date filter change
  const handleDateFilterChange = (value: string) => {
    updateURL({ dateFilter: value, page: 1 });
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    updateURL({ page });
  };

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: meta.totalPages,
  });

  // Generate pagination items
  const paginationItems = useMemo(() => {
    const items = [];
    const { page, totalPages } = meta;

    // Show first page
    if (page > 2) {
      items.push(1);
      if (page > 3) {
        items.push('...');
      }
    }

    // Show current page and adjacent pages
    for (
      let i = Math.max(1, page - 1);
      i <= Math.min(totalPages, page + 1);
      i++
    ) {
      items.push(i);
    }

    // Show last page
    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        items.push('...');
      }
      items.push(totalPages);
    }

    return items;
  }, [meta.page, meta.totalPages]);

  return (
    <div className='space-y-4'>
      {/* Search and Filter Controls */}
      <div className='flex flex-col gap-4 md:flex-row md:items-center'>
        {/* Search Input with Icon */}
        <div className='relative flex-1 max-w-sm'>
          <Input
            placeholder='Search patient name...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className='pr-10'
          />
          <Button
            size='sm'
            variant='ghost'
            className='absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0 bg-accent hover:bg-accent/20 text-accent-foreground'
            onClick={handleSearch}
          >
            <Search className='h-4 w-4' />
          </Button>
        </div>

        {/* Date Filter - Only show for admin */}

        <Select
          value={currentDateFilter}
          onValueChange={handleDateFilterChange}
        >
          <SelectTrigger className='w-full md:w-[180px]'>
            <SelectValue placeholder='Select date range' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='today'>Today</SelectItem>
            <SelectItem value='yesterday'>Yesterday</SelectItem>
            <SelectItem value='week'>This Week</SelectItem>
            <SelectItem value='month'>This Month</SelectItem>
            <SelectItem value='year'>This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <ScrollArea className='h-[calc(80vh-220px)] rounded-md border md:h-[calc(80dvh-200px)]'>
        <Table className='relative'>
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
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
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
                  className='h-24 text-center'
                >
                  No appointments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className='flex items-center justify-between'>
          <div className='text-sm text-muted-foreground'>
            Showing {(meta.page - 1) * meta.limit + 1} to{' '}
            {Math.min(meta.page * meta.limit, meta.total)} of {meta.total}{' '}
            appointments
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, meta.page - 1))}
                  className={
                    meta.page === 1
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer'
                  }
                />
              </PaginationItem>

              {paginationItems.map((item, index) => (
                <PaginationItem key={index}>
                  {item === '...' ? (
                    <span className='px-3 py-2'>...</span>
                  ) : (
                    <PaginationLink
                      onClick={() => handlePageChange(item as number)}
                      isActive={item === meta.page}
                      className='cursor-pointer'
                    >
                      {item}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(Math.min(meta.totalPages, meta.page + 1))
                  }
                  className={
                    meta.page === meta.totalPages
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer'
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
