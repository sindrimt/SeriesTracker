import styled from "styled-components";

export const ProfileOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  /* background-color: gray; */
  top: 130px;
  padding-right: 20px;
  padding-left: 20px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftOuter = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightsalmon; */
  display: grid;
  grid-template-rows: 1fr 1fr;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
`;

export const LeftUpper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightgreen; */
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ProfileImg = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 220px;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  /* background-color: lightgrey; */
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export const FullName = styled.div`
  font-weight: 400;
  font-size: 24px;
  /* background-color: lightcoral; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.div`
  font-weight: 300;
  font-size: 20px;
  /* background-color: lightseagreen; */
  text-align: center;
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 18px;
  padding-right: 5px;
  padding-left: 5px;
  /* background-color: lightsteelblue; */
  text-align: center;
`;

export const LeftLower = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightpink; */
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

export const Status = styled.div`
  width: 100%;
  /* background-color: lightpink; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FriendslistContainer = styled.div`
  width: 100%;
  /* background-color: lightyellow; */
  display: grid;
  grid-template-rows: 1fr 10fr;
`;

export const FriendsTxt = styled.div`
  font-weight: 400;
  font-size: 24px;
  /* background-color: lightcoral; */
  display: flex;
  padding-left: 15%;
  align-items: center;
`;

export const Friendslist = styled.div`
  width: 100%;
  /* background-color: lightgrey; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Friend = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 80px;
  padding: 0 5px 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Followers = styled.div`
  width: 100%;
  /* background-color: lightskyblue; */
  text-align: center;
  font-size: 16px;
`;

export const EditProfile = styled.img`
  display: flex;
  justify-self: center;
  padding: 0 10px 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightOuter = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightskyblue; */
  display: grid;
  grid-template-rows: 2fr 1.5fr;
  grid-gap: 20px;
`;

export const RightUpper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 40px 0px 0px;
  /* background-color: papayawhip; */
  display: grid;
  grid-template-rows: 1fr 6fr;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightsalmon; */
  display: grid;
  grid-template-columns: 10fr 1fr;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightcoral; */
  text-align: center;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditHeader = styled.img`
  display: flex;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 50px;
  font-size: 20px;
`;

export const RightLower = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: skyblue; */
  display: flex;
  justify-self: center;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
`;

export const Graph = styled.img`
  width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const BoxShadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
