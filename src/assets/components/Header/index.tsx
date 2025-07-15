import { 
    DivContainerText, 
    DivFlex, 
    DivFlexLogo, 
    Img, 
    LinkTo} from "../../../uiKit";

import logo from "../../icons/logo.svg";
import gitlogo from "../../icons/gitIconGrey.svg";
import linkedinlogo from "../../icons/linkedinIconGrey.svg";

import LinkMenu from "../LinkMenu";

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
                        <LinkMenu 
                            linkto="/" 
                            text="Home" />
                        <LinkMenu 
                            linkto="/SobreMin" 
                            text="Sobre" />  
                        <LinkMenu 
                            linkto="/Conhecimentos" 
                            text="Conhecimentos" />
                        <LinkMenu 
                            linkto="/Projetos" 
                            text="Projetos" />
                        <LinkMenu 
                            linkto="/Contatos" 
                            text="Contatos" />
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