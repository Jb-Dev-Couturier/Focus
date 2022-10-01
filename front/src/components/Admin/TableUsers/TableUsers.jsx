import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../Utils';


export default function TableUsers() {
  const usersData = useSelector((state) => state.usersReducer);

  
  const makeStyles = (status) => {
    if (status === false) {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      };
    }
    else if(status === true){
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
  return (
    <div className="tableUsers">
      <h3>Listes Utilisateurs</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px,13px,20px,0px,#f0f0f090' }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Utilisateurs</TableCell>
              <TableCell align="center" className="hide">
                ID
              </TableCell>
              <TableCell align="center">Like</TableCell>
              <TableCell align="center" className="hide-2">
                Follower
              </TableCell>
              <TableCell align="center" className="hide-2">
                Followings
              </TableCell>
              <TableCell align="center" className="hide">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(usersData[0]) &&
              usersData.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.pseudo}
                  </TableCell>
                  <TableCell align="center" className="hide">
                    {user._id}
                  </TableCell>
                  <TableCell align="center">{user.likes.length}</TableCell>
                  <TableCell align="center" className="hide-2">
                    {user.followers.length}
                  </TableCell>
                  <TableCell align="center" className="hide-2">
                    {user.following.length}
                  </TableCell>
                  <TableCell align="center" className="hide">
                    <span
                      className="status"
                      style={makeStyles(user.isBanished)}
                    >
                      {user.username}
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
