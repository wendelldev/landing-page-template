import { CustomButtom } from "../../shared/styled-components/buttons.styles"
import { HeaderContainer, HeaderIntro, HeaderOverlay, HeaderRootContainer, IntroSubText, IntroText } from "./header.styles"

export const Header = (props) => {
  return (
    <HeaderRootContainer>
      <HeaderIntro>
        <HeaderOverlay>
          <HeaderContainer>
            <IntroText>
              {props.data ? props.data.title : 'Loading'}
            </IntroText>
            
            <IntroSubText>
              {props.data ? props.data.paragraph : 'Loading'}
            </IntroSubText>
            <CustomButtom
              href="#features"
            >Saiba mais</CustomButtom>
          </HeaderContainer>
        </HeaderOverlay>
      </HeaderIntro>
    </HeaderRootContainer>
  )
}
