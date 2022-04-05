import React from "react";
import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts = (props) => {
  
  let postsElements = props.postData.map( post => <Post text={post.text}/> )

  let postText = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = postText.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={style["profile-post"]}>
        <h1 className={style["post-title"]}>My Posts</h1>
        <textarea className={style["post-new"]} ref={postText} onChange={onPostChange} value={props.newPostText}/>
        <button className={style["post-btn"]} onClick={addPost}>Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
