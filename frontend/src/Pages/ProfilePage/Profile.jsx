import React from 'react';
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

import pfp from "../../Assets/Profile/pfp.png";
import pen from "../../Assets/Profile/pen.png";
import graph from "../../Assets/Profile/graph.png";
import friend from "../../Assets/Profile/chopper.png";
import editbutton from "../../Assets/Profile/editbutton.jpg";


const Profile = () => {
  return (
    <ProfileOuter>

      <LeftOuter>
        <LeftUpper>
          <ProfileImg src={pfp} alt="Profile picture" />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quidem, pariatur illum? Earum inventore obcaecati voluptatum.
              Deserunt ea temporibus nemo numquam?
            </Content>
        </RightUpper>

        <RightLower>
          <Graph src={graph} alt="Graph" />
        </RightLower>
      </RightOuter>

    </ProfileOuter>
  );
};

export default Profile;