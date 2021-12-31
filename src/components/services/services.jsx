import { Container } from "../../shared/styled-components/containers.styles"
import { 
  Service,
  ServiceIcon,
  ServiceItemText,
  ServiceItemTitle,
  ServicesContainer,
  ServicesRootContainer,
  ServicesSection,
  ServicesSubtitle,
  ServicesTitle
} from "./services.styles"

export const Services = (props) => {
  return (
    <ServicesRootContainer id='services'>
      <ServicesSection>
        <ServicesTitle>Serviços</ServicesTitle>
        <ServicesSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
        </ServicesSubtitle>
        
        <ServicesContainer>
          {props.data
            ? props.data.map((d, i) => (
                <Service key={`${d.name}-${i}`}>
                  <ServiceIcon>
                    <i className={d.icon}></i>
                  </ServiceIcon>
                  <ServiceItemTitle>{d.name}</ServiceItemTitle>
                  <ServiceItemText>{d.text}</ServiceItemText>
                </Service>
              ))
            : 'loading'}
        </ServicesContainer>
      </ServicesSection>
    </ServicesRootContainer>
  )
}
