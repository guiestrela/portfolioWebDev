
import gitlogo from "../../icons/gitIconGrey.svg";
import linkedinlogo from "../../icons/linkedinIconGrey.svg";
import { DivContainerText, DivFlex, DivFlexLogo, Img, Link, Texto } from "../../../uiKit";

function Footer() {
    return (
        <>
            <DivFlex 
                width="100%" 
                alignitems="center" 
                justifycontent="center"
                flexdirection="column">
                <DivFlex 
                    width="1440px" 
                    height="59px" 
                    alignitems="center" 
                    >               
                </DivFlex>
                <DivFlex
                    width="1444px"
                    bordertop="1px solid #666666"
                    justifycontent="center"
                    alignitems="center"
                    >
                    <DivContainerText
                        justifycontent="center"
                        alignitems="center"
                        flexdirection="column"
                        paddingTotal="20px 0">
                        <Texto
                            color="#666666"
                            fontsize="16px"
                            fontweight="400"
                            fontfamily="Roboto"
                            textalign="center">
                            © 2023 Guilherme Estrela. Todos os direitos reservados.
                        </Texto>
                        <Texto
                            color="#666666"
                            fontsize="16px"
                            fontweight="400"
                            fontfamily="Roboto"
                            textalign="center">
                            guilhermestrela@gmail.com - 61 99830-6076
                        </Texto>
                        <DivFlexLogo 
                        gap="10px"
                        >
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
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    );
}
export default Footer;