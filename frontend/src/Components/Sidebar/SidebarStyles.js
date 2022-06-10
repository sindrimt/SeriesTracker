import styled from "styled-components";

export const Hamburger = styled.img`
  position: absolute;
  visibility: hidden;

  @media (max-width: 638px) {
    visibility: visible;
    position: absolute;
    top: 230px;
    left: 30px;
  }

  &:hover {
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
  margin-top: ${(props) => (props.isFixed ? "4.6%" : "7.8%")};
  padding: 40px 0 0 30px;
  white-space: nowrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

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
  font-size: 16px;
`;

export const CategoriesOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 0 15px 0;

  .categoryParent {
    font-size: 16px;
  }
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
  bottom: 12%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;

  &:before {
    content: "";
    position: absolute;

    border-top: 1.5px solid rgba(137, 137, 137, 0.8);
    width: 100%;
    top: -10px;
  }
`;

export const ListItem = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin: 0 0 20px 0;
  font-size: 15px;
`;

export const CategoryItem = styled.div`
  &:hover {
    cursor: pointer;
  }
  color: #a63fcb;
  margin: 10px 0 0 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const ItemText = styled.div`
  margin-left: 3px;
`;

export const SearchIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
