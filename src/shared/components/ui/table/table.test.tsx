import { render } from '@shared/utils/test/render';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Table, type TableColumn } from './table';

// Test data interface
interface TestData {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Mock data
const data: TestData[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 25,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    age: 35,
  },
];

// Basic columns configuration
const columns: TableColumn<TestData>[] = [
  {
    key: 'id',
    header: 'ID',
    accessor: 'id',
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name',
  },
  {
    key: 'email',
    header: 'Email',
    accessor: 'email',
  },
  {
    key: 'age',
    header: 'Age',
    accessor: 'age',
    align: 'center',
  },
];

describe('table component', () => {
  it('renders columns and data successfully', () => {
    render({ ui: <Table data={data} columns={columns} /> });

    // Check headers
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // Check data
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
  });

  it('handles row click', async () => {
    const user = userEvent.setup();
    const mockRowClick = vi.fn();

    render({
      ui: <Table data={data} columns={columns} onRowClick={mockRowClick} />,
    });

    const firstRow = screen.getByText('John Doe').closest('tr');
    if (firstRow) {
      await user.click(firstRow);
    }

    expect(mockRowClick).toHaveBeenCalledWith(data[0], 0);
  });

  it('renders empty state when no data available', () => {
    render({ ui: <Table data={[]} columns={columns} /> });

    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders custom empty message', () => {
    render({
      ui: <Table data={[]} columns={columns} emptyMessage='No users found' />,
    });

    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('shows loading state when loading is true', () => {
    const { container } = render({
      ui: <Table data={data} columns={columns} loading={true} />,
    });

    // Should show loading skeleton
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();

    // Should not show actual data
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render({
      ui: <Table data={data} columns={columns} className='custom-table' />,
    });

    expect(container.firstChild).toHaveClass('custom-table');
  });

  it('applies custom header className', () => {
    render({
      ui: (
        <Table data={data} columns={columns} headerClassName='custom-header' />
      ),
    });

    const thead = screen.getAllByRole('columnheader')[0]?.closest('thead');
    expect(thead).toHaveClass('custom-header');
  });

  it('applies custom body className', () => {
    render({
      ui: <Table data={data} columns={columns} bodyClassName='custom-body' />,
    });

    const tbody = screen.getAllByRole('cell')[0]?.closest('tbody');
    expect(tbody).toHaveClass('custom-body');
  });
});
