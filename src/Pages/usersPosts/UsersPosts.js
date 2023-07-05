import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UsersPosts = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
      method: 'GET'

    }).then(res => res.json())
      .then(data => {

        // converting the received obj to array
        const postsArr = Object.keys(data).map(key => data[key]);
        setPosts(postsArr);

      });
  }, [userId]);



  return (
    <>
      {/* <h1><u>{userName}'s Posts</u></h1><br /> */}
      <Link to={'/'} className='cursor'>Go Back</Link>
      {posts.map(post => {
        return (
          < div key={post.id} >
            <h3>TITLE: {post.title}</h3>
            <p>{post.body}</p><br />
          </div >
        );
      })}
    </>
  );
}

export default UsersPosts;