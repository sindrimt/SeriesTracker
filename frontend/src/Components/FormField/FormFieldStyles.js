import styled from "styled-components";

export const FieldContainer = styled.div`
    .input_field {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.2rem;
        padding: 0.5rem 0.5rem;
        background-color: lightcyan;
        color: ${(props) => props.theme.text};
        border-bottom: 1px solid ${(props) => props.theme.text};
        transition: all 0.3s ease-in-out;
        &:focus {
            border-bottom: 1px solid ${(props) => props.theme.text};
        }
    }
`;

/* width: 100%;
        height: 35px;
        background: rgba(242, 242, 242, 0.6);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding-left: 20px; */
