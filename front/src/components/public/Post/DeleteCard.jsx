import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/post.actions';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm('Voulez-vous supprimer cet article ?')) {
          deleteQuote();
        }
      }}
    >
      <DeleteOutlineOutlinedIcon />
    </div>
  );
};

export default DeleteCard;
