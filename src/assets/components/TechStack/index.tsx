import { DivContainerText, DivFlex, Texto, TitleH2 } from "../../../uiKit";

function TechStack() {
    return(
        <DivFlex
        width="100%" 
        alignitems="center" 
        justifycontent="center">
            <DivFlex
                width="1440px" 
                height="59px" 
                alignitems="center" 
                justifycontent="center"
                paddingTotal="80px 0">
                <DivContainerText
                    flexdirection="column"
                    gap="20px"
                    alignitems="center"
                    justifycontent="center">
                    <TitleH2
                        color="#42446E"
                        fontsize="48px"
                        fontweight="bold"
                        fontfamily="Roboto"
                        paddingtop="180px"
                        textalign="center">
                        Meus Conhecimentos
                    </TitleH2>
                    <Texto
                        color="#666666"
                        fontsize="20px"
                        fontweight="400"
                        fontfamily="Roboto"
                        textalign="center"
                        paddingtop="20px">
                        Aqui estão algumas das tecnologias que eu tenho conhecimento e experiência.
                    </Texto>
                </DivContainerText>
            </DivFlex>
        </DivFlex>
    )
}

export default TechStack;