import React from "react";
import profile_photo from '../../../../images/profile-photo.jpg';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style["profile-posts"]}>
      <img className={style["post-icon"]} src={profile_photo} alt="" />
      <p className={style["post-text"]}>{props.text}</p>
    </div>
  );
};

export default Post;
