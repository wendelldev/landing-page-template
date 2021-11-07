import styled from "styled-components";

export const Title = styled.h2`
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 15px;

    &::after {
        position: absolute;
        content: "";
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
        height: 4px;
        width: 60px;
        bottom: 0;
        left: 0;
    }
`

export const Subtitle = styled.h3`
    font-size: 22px;
    margin: 0 0 20px;
`

export const Text = styled.p`
    line-height: 24px;
    margin: 30px 0;
`