import styled from 'styled-components';


export const AboutContainer = styled.div`
    padding: 100px 0;
`

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 992px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`

export const AboutImage = styled.img`
    width: 100%;
    max-width: 670px;
    margin-top: 10px;
    margin-bottom: 20px;
    background: #FFF;
    border-right: 0;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.06);
`

export const TextContainer = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
`

export const AboutTextContainer = styled.div`
    
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
        width: 100vw;
    }

    @media(max-width: 470px) {
        flex-direction: column;
        margin-bottom: 15px;
    }
`

export const List = styled.div`
    width: 100%;
`

export const ListItem = styled.li`
    margin-bottom: 6px;
    margin-left: 6px;
    list-style: none;
    padding: 0;

    &:before {
        content: "\f00c";
        font-family: "FontAwesome";
        color: #5ca9fb;
        font-size: 11px;
        font-weight: 300;
        padding-right: 8px;
    }
`

