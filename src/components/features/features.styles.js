import styled from "styled-components";
import { Container } from "../../shared/styled-components/containers.styles";

export const FeaturesRootContainer = styled.div`
    background: #f6f6f6;
`

export const FeaturesSection = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
`

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`

export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
`

export const FeatureIcon = styled.div`
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

export const FeatureTitle = styled.h3`
    text-align: center;
`

export const FeatureText = styled.p`
    text-align: center;
`