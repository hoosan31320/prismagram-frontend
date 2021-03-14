import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
`;
// eslint-disable-next-line
export default () => {
    // eslint-disable-next-line
    const [action, setAction] = useState("logIn");

    return (
        <Wrapper>
            {action === "logIn" ? <Box>Log In</Box> : <Box>Sign Up</Box>}
        </Wrapper>
    );
};