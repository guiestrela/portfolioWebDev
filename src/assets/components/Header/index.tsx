
import { 
    DivContainerText, 
    DivFlex, 
    DivFlexLogo, 
    Img, 
    LinkTo} from "../../../uiKit";

import logo from "../../icons/logo.svg";
import gitlogo from "../../icons/gitIconGrey.svg";
import linkedinlogo from "../../icons/linkedinIconGrey.svg";


function Header() {
    return(
        <>
            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex 
                    width="1440px" 
                    height="59px" 
                    alignitems="center" 
                    paddingTotal="80px 0" 
                    justifycontent="space-between">
                    <DivFlexLogo 
                        paddingtop="25px">
                        <Img src={logo}/>
                    </DivFlexLogo>
                    <DivContainerText 
                        gap="59px" 
                        flexdirection="row" 
                        alignitems="center" 
                        justifycontent="space-between">
                        <LinkTo 
                            color="#666666" 
                            href="/" 
                            fontfamily="Roboto" 
                            fontsize="20px" 
                            fontweight="400" 
                            hoverdecoration="none"
                            hovercolor="#2c9cec">
                        Home
                        </LinkTo>
                        <LinkTo 
                            color="#666666" 
                            href="/" 
                            fontfamily="Roboto" 
                            fontsize="20px" 
                            fontweight="400" 
                            hoverdecoration="none"
                            hovercolor="#2c9cec">
                        Sobre
                        </LinkTo>
                        <LinkTo 
                            color="#666666" 
                            href="#conhecimentos" 
                            fontfamily="Roboto" 
                            fontsize="20px" 
                            fontweight="400" 
                            hoverdecoration="none"
                            hovercolor="#2c9cec">
                        Conhecimentos
                        </LinkTo>
                        <LinkTo 
                            color="#666666" 
                            href="#projectGrid" 
                            fontfamily="Roboto" 
                            fontsize="20px" 
                            fontweight="400" 
                            hoverdecoration="none"
                            hovercolor="#2c9cec">
                        Projeto
                        </LinkTo>
                        <LinkTo 
                            color="#666666" 
                            href="/" 
                            fontfamily="Roboto" 
                            fontsize="20px" 
                            fontweight="400" 
                            hoverdecoration="none"
                            hovercolor="#2c9cec">
                        Contato
                        </LinkTo>
                    </DivContainerText>
                    <DivFlexLogo 
                        gap="10px">
                        <LinkTo 
                            href="https://github.com/guiestrela" target="_blank">
                            <Img src={gitlogo} />
                        </LinkTo>                    
                        <LinkTo 
                            href="https://www.linkedin.com/in/guilherme-estrela-4166a539/" 
                            target="_blank">
                            <Img src={linkedinlogo} />
                        </LinkTo>
                    </DivFlexLogo>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Header;