import styled from "styled-components";
import { Container } from "../../shared/styled-components/containers.styles";
import { Subtitle, Title } from "../../shared/styled-components/text.styles";

export const ServicesRootContainer = styled.div`
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

`

export const ServiceTitle = styled(Title)`
    color: #FFFFFF;
`

export const ServiceSubtitle = styled(Subtitle)`
    color: #FFFFFF;
`

