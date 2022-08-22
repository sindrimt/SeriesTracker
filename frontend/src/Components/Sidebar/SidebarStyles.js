import styled from "styled-components";

export const SidebarOuter = styled.div`
    //position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
    position: fixed;
    background-color: ${(props) => props.theme.sidebar.backgroundColor};
    // margin-top: ${(props) => (props.isFixed ? "73px" : "111px")};
    margin-top: 110px;
    font-family: "Anek Malayalam", sans-serif;
    font-weight: 300;
    width: 230px;
    height: calc(100% - 110px);
    overflow-y: scroll;
    font-size: 15px;
    padding: 22px 0 0 0;
    white-space: nowrap;
    display: grid;
    letter-spacing: 1.7px;
    grid-template-rows: 8fr 2fr 1fr;

    ::-webkit-scrollbar {
        background-color: ${(props) => props.theme.sidebar.backgroundColor};
        //background-color: red;
    }

    ::-webkit-scrollbar-thumb {
        border: 5px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: transparent;
    }

    &:hover {
        overflow-y: scroll;

        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.scrollbar.background};
        }
        ::-webkit-scrollbar {
            background-color: ${(props) => props.theme.sidebar.backgroundColor};
        }
    }

    @media (max-width: 638px) {
        display: none;
    }
`;

export const SearchOuter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 20px;
    font-size: 16px;
    background-color: ${(props) => props.theme.sidebar.search};
    color: ${(props) => props.theme.white};
`;

export const SidebarLine = styled.div`
    position: relative;
    border-top: 1.5px solid rgba(137, 137, 137, 0.15);
    left: 5%;
    width: 90%;
    align-self: center;
`;

export const PanelOuter = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: repeat(5, 50px);
    grid-row-gap: 12px;
`;

export const PanelOuterAccount = styled.div`
    margin-top: 45px;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(50px);
    grid-row-gap: 0px;
    padding-bottom: 50px;
    background-color: ${(props) => props.theme.sidebar.backgroundColor};
`;

export const SidebarBottomLine = styled.div`
    position: absolute;
    border-top: 1.5px solid rgba(137, 137, 137, 0.15);
    width: 100%;
    align-self: center;
    bottom: 100px;
`;

export const AccountHeader = styled.div`
    position: absolute;
    font-size: 14px;
    margin-left: 26px;
    margin-top: -30px;
    letter-spacing: 2px;
`;

export const Trademark = styled.div`
    position: relative;
    bottom: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    left: 16%;
    width: 83%;
    color: ${(props) => props.theme.white};

    &:before {
        content: "";
        position: absolute;
        border-top: 1.5px solid rgba(137, 137, 137, 0.8);
        width: 100%;
        top: -10px;
        transform: translate(-9%, 0);
    }
`;

export const Github = styled.img`
    position: relative;
    width: 42px;
`;

export const GithubBack = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-radius: 50%;
    height: 40px;
    left: 50%;
    bottom: 28px;
    outline: 2px solid rgba(166, 63, 203, 0);
    transform: translateX(-50%);

    &:hover {
        transition: 0.2s ease-in-out;
        outline: 2px solid ${(props) => props.theme.navbar.underline};
        border-radius: 50%;
        cursor: pointer;
    }
`;
