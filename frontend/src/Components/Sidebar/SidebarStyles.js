import styled from "styled-components";

export const Hamburger = styled.img`
  position: absolute;
  visibility: hidden;
  @media (max-width: 638px) {
    visibility: visible;
    position: absolute;
    top: 230px;
    left: 30px;
  } &:hover {
    cursor: pointer;
  }

`;

export const SidebarOuter = styled.div`
  position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Anek Malayalam", sans-serif;
  font-weight: 300;
  width: 250px;
  height: 100%;
  font-size: 18px;
  margin-top: ${(props) => (props.isFixed ? "85px" : "150px")};
  padding: 30px;
  white-space: nowrap;
  @media (max-width: 638px) {
    display: none;
  }
`;

export const SearchOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 20px;
`;

export const CategoriesOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 15px 0;
`;

export const SidebarLine = styled.div`
  position: relative;
  border-top: 1.5px solid rgba(137, 137, 137, 0.15);
  width: 80%;
  align-self: center;
`;

export const PanelOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 0 0 0;
`;

export const Icons = styled.img`
  position: relative;
  padding: 0 10px 0 0;
  top: 6px;
`;

export const SidebarBottomLine = styled.div`
  position: absolute;
  border-top: 1.5px solid rgba(137, 137, 137, 0.15);
  width: 80%;
  align-self: center;
  bottom: 100px;
`;

export const Trademark = styled.div`
  position: absolute;
  bottom: 25px;
  padding: 0 0 15px 0;
`;

export const ListItem = styled.div`
  &:hover {
    cursor: pointer;
  };
  margin: 0 0 20px 0;
`;

export const CategoryItem = styled.div`
  &:hover {
    cursor: pointer;
  };
  color: #A63FCB;
  margin: 10px 0 0 10px;
`;