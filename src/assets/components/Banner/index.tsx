import { DivContainerText, DivFlex, DivFlexLogo, Img, Texto, Title } from "../../../uiKit";

import perfil from "../../images/perfil.png"

function Banner(){
    return(
        <>
            <DivFlex
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex
                    width="1440px" 
                    height="100%" 
                    alignitems="center" 
                    paddingTotal="180px 0" 
                    justifycontent="space-between"
                    flexdirectionmob="column"
                    >
                    <DivContainerText
                        flexdirection="column"
                        paddingTotal="0 20px">
                        <Title
                            fontfamily="Roboto"
                            fontsize="58px"
                            fontweight="700"
                            textalign="start"
                            color="#42446e">
                            Olá, eu sou o <br />
                            <span style={{ color: "#2c9cec" }}>Guilherme</span>
                        </Title>
                        <Texto
                            textalign="start"
                            fontfamily="Roboto"
                            fontsize="30px"
                            fontweight="400"
                            color="#42446e">
                            Desenvolvedor Front-end | React.js | TypeScript
                        </Texto>
                    </DivContainerText>
                    <DivFlexLogo
                        widthTotal="500px"
                        heightTotal="500px"
                        widthmob="380px"
                        heightmob="380px"
                        paddingtop="25px"
                        paddingTotal="0 20px">
                        <Img 
                            src={perfil} 
                            borderradius="50%" 
                            border="8px solid #2c9cec" />
                    </DivFlexLogo>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Banner;