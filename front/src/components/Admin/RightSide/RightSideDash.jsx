import React from 'react'
import Trends from '../../Trends'
import TablePosts from '../tablePost/TablePost';

const RightSideDash = () => {
    
  return (
    <div className="RightSideDash">
      <h3>Dernier Posts</h3>
      <Trends />
      <TablePosts/>
    </div>
  );
}

export default RightSideDash