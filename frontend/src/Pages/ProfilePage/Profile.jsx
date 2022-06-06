import React, { useState, useEffect, useRef } from "react";
import {
  ProfileOuter,
  LeftOuter,
  RightOuter,
  RightUpper,
  RightLower,
  LeftUpper,
  LeftLower,
  ProfileImg,
  ProfileInfo,
  FullName,
  UserName,
  Description,
  Status,
  FriendslistContainer,
  FriendsTxt,
  Friendslist,
  Friend,
  Followers,
  EditProfile,
  HeaderContainer,
  Header,
  EditHeader,
  Content,
  Graph,
} from "./ProfileStyles";

import pen from "../../Assets/Profile/pen.png";
import graph from "../../Assets/Profile/graph.png";
import friend from "../../Assets/Profile/chopper.png";
import editbutton from "../../Assets/Profile/editbutton.jpg";

import { useAuth, getUserData } from "../../firebase";

import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useAuth();
  const [user, setUser] = useState({});
  const [image, setImage] = useState({});

  let inputRef = useRef();

  const globalUser = useSelector((state) => state.user.user);

  // Loads checks the database for updates
  useEffect(() => {
    checkUser();
  });

  const checkUser = async () => {
    await getUserData(currentUser?.uid).then((res) => {
      setUser(res);
    });
  };

  const decideProfilePic = () => {
    if (globalUser?.googlePhotoUrl) {
      return globalUser?.googlePhotoUrl;
    } else if (globalUser?.photoUrl) {
      return `api/${globalUser?.photoUrl}`;
    } else {
      return "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    }
  };

  const showModal = () => {
    console.log(inputRef);
    inputRef.current.click();
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <>
      <ProfileOuter>
        <LeftOuter>
          <LeftUpper>
            <ProfileImg onClick={() => showModal()} src={decideProfilePic()} alt="Profile pic" />
            <ProfileInfo>
              <FullName>{globalUser?.username}</FullName>
              <UserName>Luffy, {globalUser?._id}</UserName>
              <Description>Im gonna become the king of the pirates!</Description>
            </ProfileInfo>
          </LeftUpper>

          <LeftLower>
            <Status>
              <FriendslistContainer>
                <FriendsTxt>Friends</FriendsTxt>
                <Friendslist>
                  <Friend src={friend} alt="Friend" />
                  <Friend src={friend} alt="Friend" />
                  <Friend src={friend} alt="Friend" />
                  <Friend src={friend} alt="Friend" />
                  <Friend src={friend} alt="Friend" />
                  <Friend src={friend} alt="Friend" />
                </Friendslist>
              </FriendslistContainer>
              <Followers>69 followers 14 following</Followers>
            </Status>
            <EditProfile src={editbutton} alt="Edit" />
          </LeftLower>
        </LeftOuter>

        <RightOuter>
          <RightUpper>
            <HeaderContainer>
              <Header>Meshi Meshi!!!</Header>
              <EditHeader src={pen} alt="Edit" />
            </HeaderContainer>
            <Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, pariatur illum? Earum inventore obcaecati
              voluptatum. Deserunt ea temporibus nemo numquam?
            </Content>
          </RightUpper>

          <RightLower>
            <Graph src={graph} alt="Graph" />
          </RightLower>
        </RightOuter>
        <input
          type="file"
          accept="images/*"
          onClick={showModal}
          style={{ display: "none" }}
          ref={inputRef}
          onChange={onImageChange}
        />
      </ProfileOuter>
    </>
  );
};

export default Profile;
