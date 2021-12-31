import styled from "styled-components";
import { Container } from "../../shared/styled-components/containers.styles";
import { Subtitle, Title } from "../../shared/styled-components/text.styles";
import { FeatureText, FeatureTitle } from "../features/features.styles";

export const ServicesRootContainer = styled.div`
    width: 100%;
    padding: 100px 0;

    background-image: url("https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80");
    background-repeat: no-repeat;
    background-size: cover;

    text-align: center;
`

export const ServicesSection = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
`

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    flex-grow: 1;
    flex-basis: 300px;
`

export const ServiceIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);

    & i.fa {
        font-size: 30px;
        color: #FFFFFF;
        transition: all 0.5s;
    }
`

export const ServicesTitle = styled(Title)`
    color: #FFFFFF;
`

export const ServicesSubtitle = styled(Subtitle)`
    color: #FFFFFF;
`

export const ServiceItemTitle = styled(FeatureTitle)`
    color: #FFFFFF;
`

export const ServiceItemText = styled(FeatureText)`
    color: #FFFFFF;
    max-width: 400px;
`

