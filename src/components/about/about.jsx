import {
  Subtitle,
  Text,
  Title
} from "../../shared/styled-components/text.styles";
import {
  AboutContainer,
  AboutImage,
  AboutTextContainer,
  Container,
  ContainerRow,
  ImageContainer,
  List,
  ListContainer,
  ListItem,
  TextContainer
} from "./about.styles";

export const About = (props) => {
  return (
    <AboutContainer id="about">
      <Container>
        <ContainerRow>
          <ImageContainer>
            {" "}
            <AboutImage src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </ImageContainer>
          <TextContainer>
            <AboutTextContainer>
              <Title> Sobre nós </Title>
              <Text>{props.data ? props.data.paragraph : "loading..."}</Text>
              <Subtitle>Why Choose Us?</Subtitle>
              <ListContainer>
                <List>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <ListItem key={`${d}-${i}`}>{d}</ListItem>
                        ))
                      : "loading"}
                  </ul>
                </List>
                <List>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <ListItem key={`${d}-${i}`}> {d}</ListItem>
                        ))
                      : "loading"}
                  </ul>
                </List>
              </ListContainer>
            </AboutTextContainer>
          </TextContainer>
        </ContainerRow>
      </Container>
    </AboutContainer>
  );
};
