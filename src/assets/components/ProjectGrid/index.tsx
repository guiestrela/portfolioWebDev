import { 
    DivContainerText, 
    DivFlex,   
    Texto, 
    TitleH2 } from "../../../uiKit";

import BackGroundRemover from "../../images/backgroundremover.png"
import Pco from "../../images/PCO.png"
import link from "../../icons/link.svg";
import Git from "../../icons/gitIconGrey.svg"

import ProjectModel from "../ProjectModel";

function ProjectGrid(){
    return(
        <>
            <DivFlex
                id="projectGrid"
                width="100%" 
                alignitems="center" 
                justifycontent="center"
                flexdirection="column"
                >
                <DivFlex
                    width="1440px" 
                    height="100px" 
                    alignitems="center" 
                    justifycontent="center"
                    flexdirection="column"
                    paddingTotal="180px 0"
                    >
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

                <DivFlex
                    flexdirection="row"
                    paddingTotal="20px 20px"
                    gap="40px"
                    borderradius="10px"
                    background="radial-gradient(circle,#F5F5F5 15%, #E2E2E2 50%, #F5F5F5 85%)"
                    flexdirectionmob="column">

                    {/* projeto background remover */}

                <ProjectModel
                    foto={BackGroundRemover}
                    titulo="Background Remover"
                    descricao="Um projeto que utiliza API para remover o fundo de imagens de forma rápida e eficiente, Projeto feito com React e Typescript usando styled-components."
                    techStack="React, Typescript, Styled-Components"
                    iconPreview={link}
                    linkPreview="https://github.com/guiestrela/SRB"
                    iconGit= {Git}
                    linkGit="https://srb-psi.vercel.app/"
                />

                    {/* projeto PCO */}

                <ProjectModel
                    foto={Pco}
                    titulo="PCO"
                    descricao="Um projeto de uma site para uma ONG real que atua em Brasilia."
                    techStack="React, Typescript, Styled-Components"
                    iconPreview={link}
                    linkPreview="https://pco-seven.vercel.app/"
                    iconGit= {Git}
                    linkGit="https://github.com/guiestrela/PCO"
                />                    
                </DivFlex>
                
            </DivFlex>
        </>
    )
}

export default ProjectGrid;

