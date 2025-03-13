import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../../store/post/PostActions';
import styles from './MemberDetail.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../common/Button';

function MemberDetail() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);

  // Fetch the post data when the component loads
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  // Show a loading message if the post data is not available yet
  if (!post) {
    return <p>Loading...</p>;
  }

  // Hide the loading placeholder once the image has loaded
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Go back to the previous page when the button is clicked
  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <div className={styles.memberDetail}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {imageLoading && <div className={styles.imagePlaceholder}>Loading...</div>}
          <img
            src={`https://picsum.photos/seed/${post.id}/600/400`}
            alt="Member story"
            className={styles.detailImage}
            onLoad={handleImageLoad}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </div>
        <div className={styles.content}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Button className="grayBtn" onClick={handleBackClick}>Back to Posts</Button>
          
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
