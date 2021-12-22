import { Title } from "../../shared/styled-components/text.styles"
import { 
  Feature,
  FeatureIcon,
  FeaturesContainer,
  FeaturesRootContainer,
  FeaturesSection,
  FeatureText,
  FeatureTitle
} from "./features.styles"

export const Features = (props) => {
  return (
    <FeaturesRootContainer id="features">
      <FeaturesSection>
        <Title>Qualidades</Title>
        <FeaturesContainer>
          {props.data
            ? props.data.map((d, i) => (
                <Feature key={`${d.title}-${i}`} >
                  <FeatureIcon>
                    <i className={d.icon}></i>
                  </FeatureIcon>
                  <FeatureTitle>{d.title}</FeatureTitle>
                  <FeatureText>{d.text}</FeatureText>
                </Feature>
              ))
            : 'Carregando...'}
        </FeaturesContainer>
      </FeaturesSection>
    </FeaturesRootContainer>
  )
}
