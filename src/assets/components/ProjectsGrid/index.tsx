import { DivContainerText, DivFlex, Texto, TitleH2 } from "../../../uiKit";

function ProjectGrid(){
    return(
        <>
            <DivFlex
                width="100%" 
                alignitems="center" 
                justifycontent="center">
                <DivFlex
                    width="1440px" 
                    height="100px" 
                    alignitems="center" 
                    justifycontent="center"
                    flexdirection="column"
                    paddingTotal="180px 0">
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
                        paddingbottom="20px"
                        textalign="center">
                            Projetos
                        </TitleH2>
                        <Texto
                        color="#666666"
                        fontsize="20px"
                        fontweight="400"
                        fontfamily="Roboto"
                        textalign="center"
                        paddingtop="20px"
                        paddingbottom="140px"
                        paddingbottommob="80px">
                            Alguns dos meus projetos pessoais.
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default ProjectGrid;

