import type { ReactNode } from 'react';
import { Loader } from '@shared/components/ui/loader';

export interface TableColumn<T = object> {
  key: string;
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T, index: number) => ReactNode;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
  className?: string;
  isRowHeader?: boolean;
}

export interface TableProps<T = object> {
  data: T[];
  columns: TableColumn<T>[];
  caption?: string;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  onRowClick?: (row: T, index: number) => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
  loaderMessage?: string;
  loaderSubMessage?: string;
  showCaptionVisually?: boolean;
}

export const Table = <T extends object>({
  data,
  columns,
  caption,
  loading = false,
  emptyMessage,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  rowClassName = '',
  onRowClick,
  loaderMessage,
  loaderSubMessage,
  showCaptionVisually = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
}: TableProps<T>) => {
  const getCellValue = (row: T, column: TableColumn<T>): T[keyof T] => {
    return row[column.accessor];
  };

  const getRowClassName = (row: T, index: number): string => {
    const baseClass =
      'hover:bg-gray-50 focus-within:bg-gray-50 transition-colors duration-200';
    const clickableClass = onRowClick
      ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
      : '';

    if (typeof rowClassName === 'function') {
      return `${baseClass} ${clickableClass} ${rowClassName(row, index)}`;
    }
    return `${baseClass} ${clickableClass} ${rowClassName}`;
  };

  const getAlignmentClass = (align?: string): string => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const handleRowClick = (row: T, index: number) => {
    if (onRowClick) {
      onRowClick(row, index);
    }
  };

  const handleRowKeyDown = (
    event: React.KeyboardEvent,
    row: T,
    index: number,
  ) => {
    if (onRowClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onRowClick(row, index);
    }
  };

  const rowHeaderColumn = columns.find((col) => col.isRowHeader) || columns[0];

  if (loading) {
    return (
      <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
        <Loader
          message={loaderMessage}
          subMessage={loaderSubMessage}
          aria-label={loaderMessage}
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      <div className='overflow-x-auto'>
        <table
          className='w-full'
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          role='table'>
          {caption && (
            <caption
              className={
                showCaptionVisually
                  ? 'px-6 py-3 text-lg font-semibold text-gray-900 text-left'
                  : 'sr-only'
              }>
              {caption}
            </caption>
          )}

          <thead className={`bg-gray-50 ${headerClassName}`}>
            <tr role='row'>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope='col'
                  className={`px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider ${getAlignmentClass(column.align)} ${column.className || ''}`}
                  style={column.width ? { width: column.width } : undefined}
                  role='columnheader'>
                  <div className='flex items-center space-x-2'>
                    <span>{column.header}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody
            className={`bg-white divide-y divide-gray-200 ${bodyClassName}`}>
            {data.length === 0 ? (
              <tr role='row'>
                <td
                  colSpan={columns.length}
                  className='px-6 py-12 text-center text-gray-500'
                  aria-live='polite'>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={getRowClassName(row, rowIndex)}
                  onClick={() => handleRowClick(row, rowIndex)}
                  onKeyDown={(e) => handleRowKeyDown(e, row, rowIndex)}
                  tabIndex={onRowClick ? 0 : -1}
                  role='row'
                  aria-label={
                    onRowClick
                      ? `Row ${rowIndex + 1}, click to view details`
                      : undefined
                  }>
                  {columns.map((column) => {
                    const cellValue = getCellValue(row, column);
                    const displayValue = column.render
                      ? column.render(cellValue, row, rowIndex)
                      : cellValue;

                    const isRowHeader = column === rowHeaderColumn;

                    return isRowHeader ? (
                      <th
                        key={`${rowIndex}-${column.key}`}
                        scope='row'
                        className={`px-6 py-4 whitespace-nowrap font-medium ${getAlignmentClass(column.align)} ${column.className || ''}`}
                        role='rowheader'>
                        {displayValue as React.ReactNode}
                      </th>
                    ) : (
                      <td
                        key={`${rowIndex}-${column.key}`}
                        className={`px-6 py-4 whitespace-nowrap ${getAlignmentClass(column.align)} ${column.className || ''}`}>
                        {displayValue as React.ReactNode}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
