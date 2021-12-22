import styled from "styled-components";

export const HeaderRootContainer = styled.header`
    margin-top: 80px;
`

export const HeaderIntro = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0;
    background: url(../../img/intro-bg.jpg) center center no-repeat;
    background-color: #e5e5e5;
    background-size: cover;
`

export const HeaderOverlay = styled.div`
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.2);
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding-left: 30px;
    padding-right: 30px;
`

export const IntroText = styled.h1`
    font-family: "Raleway", sans-serif;
    text-align: center;
    color: #FFFFFF;
    font-size: 82px;
    font-weight: 700;
    text-transform: uppercase;
`

export const IntroSubText = styled.p`
    color: #FFFFFF;
    text-align: center;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    margin: 0 auto;
    margin-bottom: 60px;
`