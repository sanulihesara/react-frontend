import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TablePagination, TableSortLabel
} from '@mui/material';
import React from 'react';

const createData = (name, category, date) => {
    console.log("my object********", { name, category, date });
    return { name, category, date };
}

const rows = [
    createData("1st Place in Running Event", "Athletics", "2023-03-23"),
    createData("2nd Place in Music Competition", "Music", "2023-12-01"),
    createData("3rd Place in badminton zonals", "Sports", "2023-10-03"),
    createData("Passed Mid-Term Test", "School", "2023-05-24"),
    createData("1st place in Long Jump", "Athletic", "2023-03-03"),
    createData("Won a championship in mt school annual athletic meet", "Athletics", "2023-03-03"),
    createData("Won 2nd place in a debate", "School", "2024-01-14"),
    createData("Went to Glove Factory", "Automobile", "2023-07-09"),
];

const headCells = [
    { id: 'name', label: 'Achievement' },
    { id: 'category', label: 'Achievement Category' },
    { id: 'Date', label: 'Date' },
];

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                )
                )
                }
            </TableRow>
        </TableHead>

    );
};



const MyAchievements = () => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page*rowsPerPage);

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    <TableBody>
                        { (rowsPerPage > 0 ? rows.slice(page* rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        )
                        )
                        }
                        {
                            emptyRows > 0 && (
                                <TableRow style={{height : 53 * emptyRows}}>
                                    <TableCell colSpan={3} />
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10,25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage} />       
        </Paper>
    );
};

export default MyAchievements;