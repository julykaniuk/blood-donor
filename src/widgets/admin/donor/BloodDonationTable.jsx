import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import styles from './BloodDonationTable.module.css';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const BloodDonationTable = () => {
    const data = React.useMemo(
        () => [
            {
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },{
                name: 'Іванов Іван Іванович',
                bloodType: 'A+',
                lastDonation: '2024-01-15',
                donationType: 'Повна донація',
                contacts: '+380123456789',
                profileLink: 'https://profile-link.com/ivanov',
            },
            {
                name: 'Петренко Петро Петрович',
                bloodType: 'B-',
                lastDonation: '2024-02-20',
                donationType: 'Аферез',
                contacts: '+380987654321',
                profileLink: 'https://profile-link.com/petrenko',
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'ПІБ',
                accessor: 'name',
            },
            {
                Header: 'Група крові',
                accessor: 'bloodType',
            },
            {
                Header: 'Остання здача крові',
                accessor: 'lastDonation',
            },
            {
                Header: 'Тип донації',
                accessor: 'donationType',
            },
            {
                Header: 'Контакти',
                accessor: 'contacts',
            },
            {
                Header: 'Профіль',
                accessor: 'profileLink',
                Cell: ProfileLinkCell,
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter, pageIndex },
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <div className={styles.tableContainer}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Пошук..."
                />
            </div>

            <table {...getTableProps()} className={styles.table}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id} className={styles.tr}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                key={column.id}
                                className={styles.th}
                            >
                                {column.render('Header')}
                                <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? <FaArrowDown />
                            : <FaArrowUp />
                        : ''}
                  </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id} className={styles.tr}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} key={cell.column.id} className={styles.td}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>

            {data.length > 10 && (
                <div className={styles.pagination}>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Назад
                    </button>
                    <span>
            {pageIndex + 1} / {pageOptions.length}
          </span>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        Вперед
                    </button>
                </div>
            )}
        </div>
    );
};

const ProfileLinkCell = ({ cell: { value } }) => (
    <a href={value} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Перейти
    </a>
);

ProfileLinkCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,
};

export default BloodDonationTable;
