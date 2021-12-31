import styled from "styled-components";
import { Container } from "../../shared/styled-components/containers.styles";
import { Text } from "../../shared/styled-components/text.styles";

export const TeamRootContainer = styled.div`
    padding: 100px 0;
    text-align: center;
`

export const TeamSection = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
`

export const TeamIntegrant = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TeamIntegrantImage = styled.img`
    width: 240px;
    padding: 10px 0 0;
`

export const IntegrantInfoContainer = styled.div`
    padding: 10px 0 0;
    text-align: center;
    display: flex;
    flex-direction: column;
` 

export const TeamIntegrantName = styled.h4`
    margin: 5px 0;
`

export const TeamIntegrantRole = styled(Text)`
    color: #888;
    margin: 0;
`