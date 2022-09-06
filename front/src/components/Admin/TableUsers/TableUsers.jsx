import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, post, follower, followings, status) {
  return { name, post, follower, followings, status };
}

const rows = [
  createData('Jean Neymar', 0, 5, 6, `Approuvé(es)`),
  createData('Cyril Tarba', 2, 2, 4, 'Banni(es)'),
  createData('Cecile duFlot', 0, 8, 11, `Approuvé(es)`),
  createData('Pascal Aubistrot', 1, 8, 8, `Approuvé(es)`),
  createData('Francis 4 L', 1, 0, 9, `Approuvé(es)`),
];

const makeStyles = (status) => {
  if (status === `Approuvé(es)`) {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  }
  else if(status === 'Banni(es)'){
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  }
  else{
    return {
      background: '#59bfff',
      color: 'white',
    };
};}

export default function TableUsers() {
  return (
    <div className="tableUsers">
      <h3>Utilisateur Récents</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px,13px,20px,0px,#f0f0f090' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Utilisateurs</TableCell>
              <TableCell align="center">Posts</TableCell>
              <TableCell align="center">Follower</TableCell>
              <TableCell align="center">Followings</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.post}</TableCell>
                <TableCell align="center">{row.follower}</TableCell>
                <TableCell align="center">{row.followings}</TableCell>
                <TableCell align="center">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
