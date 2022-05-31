import React, { useState, useEffect } from "react";
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

const Profile = () => {
  const currentUser = useAuth();
  const [user, setUser] = useState({});

  // Loads checks the database for updates
  useEffect(() => {
    checkUser();
  });

  const checkUser = async () => {
    await getUserData(currentUser?.uid).then((res) => {
      setUser(res);
    });
  };

  return (
    <>
      <ProfileOuter>
        <LeftOuter>
          <LeftUpper>
            <ProfileImg
              onClick={() => console.log("CLicked image")}
              src={user?.photoURL ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              alt="Profile pic"
            />
            <ProfileInfo>
              <FullName>Monkey D. Luffy</FullName>
              <UserName>Luffy</UserName>
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
      </ProfileOuter>
    </>
  );
};

export default Profile;
