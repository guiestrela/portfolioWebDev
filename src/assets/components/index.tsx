import { DivContainerText, DivFlex, DivFlexLogo, Img, Link } from "../../uiKit";

import logo from "../../assets/icons/logo.svg"
import gitlogo from "../../assets/icons/gitIcongrey.svg"
import linkedinlogo from "../../assets/icons/linkedinIcongrey.svg"

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
                    <Link 
                        color="#666666" 
                        href="#" 
                        fontfamily="Roboto" 
                        fontsize="20px" 
                        fontweight="400" 
                        hoverdecoration="none"
                        hovercolor="#000000">
                    Home
                    </Link>
                    <Link 
                        color="#666666" 
                        href="#"  
                        fontsize="20px" 
                        fontweight="400" 
                        fontfamily="Roboto" 
                        hoverdecoration="none" 
                        hovercolor="#000000">   
                    Sobre
                    </Link>
                    <Link 
                        color="#666666" 
                        href="#"  
                        fontsize="20px" 
                        fontweight="400" 
                        fontfamily="Roboto" 
                        hoverdecoration="none" 
                        hovercolor="#000000">
                    Tech Stack
                    </Link>
                    <Link 
                        color="#666666" 
                        href="#"   
                        fontsize="20px" 
                        fontweight="400" 
                        fontfamily="Roboto" 
                        hoverdecoration="none" 
                        hovercolor="#000000">
                    Projetos
                    </Link>
                    <Link 
                        color="#666666" 
                        href="#"  
                        fontsize="20px" 
                        fontweight="400" 
                        fontfamily="Roboto" 
                        hoverdecoration="none" 
                        hovercolor="#000000">
                    Contato
                    </Link>
                </DivContainerText>
                <DivFlexLogo 
                    gap="10px">
                    <Link 
                        href="https://github.com/guiestrela" target="_blank">
                        <Img src={gitlogo} />
                    </Link>
                    
                    <Link 
                        href="https://www.linkedin.com/in/guilherme-estrela-4166a539/" 
                        target="_blank">
                        <Img src={linkedinlogo} />
                    </Link>
                </DivFlexLogo>
            </DivFlex>
        </DivFlex>
        </>
    )
}

export default Header;