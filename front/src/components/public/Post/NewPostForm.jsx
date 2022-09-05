import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, timestampParser } from '../../Utils';
import { Link } from 'react-router-dom';
import { getPosts } from '../../../actions/post.actions';
import { uploadImage, uploadPost } from '../../../actions/UploadActions';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState('');
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = async (e) => {
    if(message !== ''){

      e.preventDefault();
  
      if (message || postPicture || video) {
        const newPost = {
          posterId: userData._id,
          message: message,
        };
  
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append('name', filename);
          data.append('file', file);
          newPost.picture = './uploads/posts/' + filename;
          console.log(newPost);
          try {
            dispatch(uploadImage(data));
          } catch (error) {
            console.log(error);
          }
        }
        dispatch(uploadPost(newPost)).then(() => dispatch(getPosts()));
  
        cancelPost();
      } 
    }else {
      alert('Veuillez entrer un message');
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo('');
  };

  const cancelPost = () => {
    setMessage('');
    setPostPicture('');
    setVideo('');
    setFile('');
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);

    const handleVideo = () => {
      let findLink = message.split(' ');
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes('https://www.yout') ||
          findLink[i].includes('https://yout')
        ) {
          let embed = findLink[i].replace('watch?v=', 'embed/');
          setVideo(embed.split('&')[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(' '));
          setPostPicture('');
        }
      }
    };
    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
        {userData.isAdmin === false && (

          <div className="data">
            <p>
              <span>{userData.following ? userData.following.length : 0}</span>{' '}
              Abonnement
              {userData.following && userData.following.length > 1 ? 's' : null}
            </p>
            <p>
              <span>{userData.followers ? userData.followers.length : 0}</span>{' '}
              Abonné
              {userData.followers && userData.followers.length > 1 ? 's' : null}
            </p>
          </div>
        )}
          <Link to="/profil">
            <div className="user-info">
              <img src={userData.profilePicture} alt="user-img" />
              <h3>{userData.pseudo}</h3>
            </div>
          </Link>
          {userData.isAdmin === false && (

          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            {/* Pour mettre image */}

            {message || postPicture || video.length > 20 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.profilePicture} alt="user-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    <img src={postPicture} alt="" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <ImageSearchRoundedIcon />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo('')}>Supprimer video</button>
                )}
              </div>
              <div className="btn-send">
                {message || postPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewPostForm;