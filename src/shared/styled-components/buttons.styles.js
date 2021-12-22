import styled from "styled-components";

export const CustomButtom = styled.a`
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: #5ca9fb;
    background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff);
    padding: 14px 34px;
    letter-spacing: 1px;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    transition: all 0.5s linear;
    border: 0;

    &:hover,
    :focus,
    :active {
        color: #FFFFFF;
        background-image: none;
        background-color: #6372ff;
    }
`

export const ContactButton = styled(CustomButtom)`
    margin: 30px 0;
    background: transparent;
    border: 2px solid #FFFFFF;

    &:hover {
        color: #1f386e;
        background: #FFFFFF;
    }
`