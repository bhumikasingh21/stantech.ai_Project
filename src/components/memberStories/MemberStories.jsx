import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/post/PostActions';
import styles from './MemberStories.module.css';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination';
import Button from '../common/Button';

function MemberStories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postList: memberStories, loading, error } = useSelector((state) => state.post);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoading, setImageLoading] = useState({});
  const storiesPerPage = 6;

  // Fetch posts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Filter stories based on the search term
  const filteredStories = memberStories.filter(story =>
    story?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic to determine which stories to show on the current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle image load event
  const handleImageLoad = (id) => {
    setImageLoading((prev) => ({ ...prev, [id]: false }));
  };

  // Function to handle story click event
  const handleStoryClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <section className={styles.memberStoriesSection}>
      <div className='container'>
        <h2>Member stories</h2>
        <input
          type="text"
          placeholder="Search stories title....."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <div className={`${styles.memberStories} ${styles.desktopView}`}>
              {currentStories.length > 0 ? currentStories.map((story) => (
                <div key={story.id} className={styles.memberStory}>
                  <div className={styles.memberStoryImg} onClick={() => handleStoryClick(story.id)}>
                    {imageLoading[story.id] !== false && <div className={styles.imagePlaceholder}>Loading...</div>}
                    <img
                      src={story.image}
                      alt="Member story"
                      onLoad={() => handleImageLoad(story.id)}
                      style={{ display: imageLoading[story.id] === false ? 'block' : 'none' }}
                    />
                  </div>
                  <div className={styles.memberStoryContent} onClick={() => handleStoryClick(story.id)}>
                    <h4 >{story.title}</h4>
                    <p>{story.body}</p>
                    <Button className="grayBtn">Read more</Button>
                  </div>
                </div>
              )) : <span>No Data Found</span>}
            </div>

             {/* common component for pagination */}

            <Pagination
              storiesPerPage={storiesPerPage}
              totalStories={filteredStories.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </section>
  );
}


export default MemberStories;