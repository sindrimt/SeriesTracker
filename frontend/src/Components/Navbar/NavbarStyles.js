import styled from "styled-components";

export const NavbarOuter = styled.div`
    background-color: ${(props) => props.theme.navbar.background};
    //background-color: ${(props) => (props.showBgColor ? props.theme.body.background : "")};
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.navbar.fontColor2};
    position: fixed;
    z-index: 100000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    font-family: "Anek Malayalam", sans-serif;
    font-weight: 300;
    backdrop-filter: blur(8px);

    @media (max-width: 720px) {
        height: 80px;
    }

    .icon {
        display: none;
        @media (max-width: 720px) {
            display: block;
        }
    }
`;

export const NavbarLine = styled.div`
    position: absolute;
    transition: 0.3s ease;
    top: 90px;
    //border-radius: 5px;
    left: 0px;
    //left: 3%;
    width: 100%;
    border-top: ${(props) => (props.showLine ? "1.5px solid rgba(137, 137, 137, 0)" : `1.5px solid ${props.theme.navbar.line}`)};

    @media (max-width: 720px) {
        top: 80px;
    }
`;

export const Logo = styled.img`
    width: 280px;
    padding-left: 30px;
    padding-right: 20px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 720px) {
        display: none;
    }
`;

export const LogoSmall = styled.img`
    width: 230px;
    padding-left: 30px;
    margin-left: 12vw;
    padding-right: 20px;
    display: none;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 720px) {
        display: block;
        width: 260px;
    }

    @media (max-width: 500px) {
        display: block;
        width: 50%;
    }
`;

export const WelcomeBack = styled.span`
    white-space: nowrap;
    @media (max-width: 720px) {
        display: none;
    }
`;

export const NavbarProfileOuter = styled.div`
    display: flex;
    height: 70px;
    margin-right: 20px;
    //color: rgba(0, 0, 0, 0.6);
    align-items: center;
    justify-content: flex-end;

    div,
    span {
        border-bottom: 2px solid rgba(166, 63, 203, 0);
        transition: 0.1s;
    }

    & .signout:hover {
        border-bottom: 2px solid ${(props) => props.theme.navbar.underline};
        cursor: pointer;
    }
`;

export const NavbarProfileImg = styled.img`
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    width: 42px;
    margin: 0px 0px -1px 0px;
`;
export const NavbarProfileImgBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    border-radius: 50%;
    height: 47px;
    margin: 0px 8px 0px 8px;
    outline: 2px solid rgba(166, 63, 203, 0);

    &:hover {
        transition: 0.2s ease-in-out;
        outline: 2px solid ${(props) => props.theme.navbar.underline};
        border-radius: 50%;
        cursor: pointer;
    }
`;

export const NavbarLinksOuter = styled.div`
    display: flex;
    justify-content: space-between;
    //width: 280px;
    font-weight: 300;
    font-size: 18px;
    column-gap: 10px;
    white-space: nowrap;

    .navtext {
        display: flex;
        justify-content: space-between;
        //width: 280px;

        white-space: nowrap;
    }

    div {
        border-bottom: 2px solid rgba(166, 63, 203, 0);
        transition: 0.1s;
    }

    .themes {
        display: flex;
        justify-content: space-between;
        //width: 280px;

        white-space: nowrap;
    }

    @media (max-width: 720px) {
        display: none;
        .navtext {
            display: flex;
            justify-content: space-between;
            color: red;
            display: none;
        }

        .themes {
            margin-left: 70px;
            margin-top: 8px;
        }
    }

    .findfriends:hover {
        border-bottom: 2px solid ${(props) => props.theme.navbar.underline};
        cursor: pointer;
    }

    .findfriends {
        padding: 0 10px 0 10px;
    }

    .findsSeries:hover {
        border-bottom: 2px solid ${(props) => props.theme.navbar.underline};
        cursor: pointer;
    }

    .showmore {
        position: relative;
        transform: rotate(-90deg);
        bottom: -2px;

        &:hover {
            cursor: pointer;
        }
    }

    .showless {
        position: relative;
        transform: rotate(90deg);
        bottom: -2px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const ThemeIcon = styled.div`
    margin-right: 3px;

    &:hover {
        cursor: pointer;
    }
`;

export const ShowMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 10px;
    position: relative;
    gap: 10px;
    bottom: 2px;

    .icon {
        border-bottom: 1px solid rgba(166, 63, 203, 0);
        &:hover {
            cursor: pointer;
            border-bottom: 1px solid ${(props) => props.theme.navbar.underline};
        }
    }

    .expandIcon {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Spill = styled.img`
    width: 25px;
    border-bottom: 1px solid rgba(166, 63, 203, 0);

    &:hover {
        cursor: pointer;
    }
`;

export const SignOut = styled.div`
    @media (max-width: 720px) {
        display: none;
    }
`;
