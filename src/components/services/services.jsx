import { Container } from "../../shared/styled-components/containers.styles"
import { ServicesContainer, ServicesRootContainer, ServicesSection, ServiceSubtitle, ServiceTitle } from "./services.styles"

export const Services = (props) => {
  return (
    <ServicesRootContainer id='services'>
      <ServicesSection>
        <ServiceTitle>Serviços</ServiceTitle>
        <ServiceSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
        </ServiceSubtitle>
        
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </ServicesSection>
    </ServicesRootContainer>
  )
}
