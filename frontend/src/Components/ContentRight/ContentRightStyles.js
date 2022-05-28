import styled from "styled-components";

export const ContentRightOuter = styled.div`
    position: relative;
    float: right;
    top: 10px;
    width: 20%;
    height: 600px;

    @media (max-width: 1400px) {
    width: 34%;
  }
    @media (max-width: 980px) {
    display: none;
  }
`;

export const ChartContainer = styled.div`
    width: 50%;
    align-items: center;
    float: right;
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Header = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #A63FCB;
`;

export const ListElement = styled.div`
    font-weight: 200;
    font-size: 16px;
    list-style: decimal inside none;
    padding: 20px;
    white-space: nowrap;
`;

export const ViewAll = styled.div`
    font-weight: 200;
    font-size: 18px;
    margin-left: 17px;
    color: #A63FCB;
    &:hover {
        cursor: pointer;
    }
`;