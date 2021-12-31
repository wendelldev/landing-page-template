import { Text, Title } from "../../shared/styled-components/text.styles"
import { IntegrantInfoContainer, TeamContainer, TeamIntegrant, TeamIntegrantImage, TeamIntegrantName, TeamIntegrantRole, TeamRootContainer, TeamSection } from "./team.styles"

export const Team = (props) => {
  return (
    <TeamRootContainer id='team'>
      <TeamSection>
        <Title>Meet the Team</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </Text>
        <TeamContainer>
          {props.data
            ? props.data.map((integrant, i) => (
                <TeamIntegrant key={`${integrant.name}-${i}`}>
                  <TeamIntegrantImage src={integrant.img} alt='Integrant Image' />
                  <IntegrantInfoContainer>
                    <TeamIntegrantName>
                      {integrant.name}
                    </TeamIntegrantName>
                    <TeamIntegrantRole>
                      {integrant.job}
                    </TeamIntegrantRole>
                  </IntegrantInfoContainer>
                </TeamIntegrant>
              ))
            : 'loading'}
        </TeamContainer>
      </TeamSection>
    </TeamRootContainer>
  )
}
