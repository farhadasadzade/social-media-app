import React from "react";
import cover from "../../images/cover.jpg";
import profile_photo from "../../images/profile-photo.jpg";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
      <img className={style["profile-cover"]} src={cover} alt="" />
      <div className={style["profile-content"]}>
        <img className={style["profile-photo"]} src={profile_photo} alt="" />
        <div className={style["profile-information"]}>
          <h2 className={style["profile-name"]}>Dimitry K.</h2>
          <h3 className={style["profile-date"]}>Date of Birth: 2 January</h3>
          <h3 className={style["profile-city"]}>City: Minsk</h3>
          <h3 className={style["profile-education"]}>Education: ADNSU</h3>
          <h3 className={style["profile-website"]}>Website: facebook.com</h3>
        </div>
      </div>
      <MyPosts postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
