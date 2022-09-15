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
    const posts = useSelector((state) => state.allPostsReducer);
    const usersData = useSelector((state) => state.usersReducer);

  return (
    <div className="tableUsers">
      <h3>Listes Posts</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px,13px,20px,0px,#f0f0f090' }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Poster</TableCell>
              <TableCell align="center">message</TableCell>
              <TableCell align="center">Commentaires</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(posts[0]) &&
              posts.map((post) => (
                <TableRow
                  key={post._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === post.posterId) {
                            return user.pseudo;
                          } else return null;
                        })
                        .join('')}
                  </TableCell>
                  <TableCell align="center">{post.message}</TableCell>
                  <TableCell align="center">{post.comments.length}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
