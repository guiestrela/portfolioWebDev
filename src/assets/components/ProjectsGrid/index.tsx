import { 
    DivContainerText, 
    DivFlex, 
    DivFlexImage, 
    Img, 
    Link, 
    Texto, 
    TitleH2 } from "../../../uiKit";

import BackGroundRemover from "../../images/backgroundremover.png"
import Pco from "../../images/PCO.png"
import link from "../../icons/link.svg";
import Git from "../../icons/gitIconGrey.svg"

function ProjectGrid(){
    return(
        <>
            <DivFlex
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
                    background="radial-gradient(circle,#F5F5F5 15%, #E2E2E2 50%, #F5F5F5 85%)">

                    {/* projeto background remover */}

                <DivFlex 
                        width="373px"                                                
                        backgroundColor="#FFFFFF"
                        flexdirection="column"
                        paddingbottom="40px"  
                        borderradius="10px"                      
                        >
                        <DivFlexImage>
                            <Img
                                borderradius="10px" 
                                src={BackGroundRemover}/>
                        </DivFlexImage>
                        <DivContainerText
                            flexdirection="column"
                            heightTotal="100px"
                            gap="20px"
                            alignitems="center"
                            justifycontent="center">
                            <TitleH2
                                color="#000000"
                                fontsize="18px"
                                fontweight="bold"
                                fontfamily="Roboto"                        
                                textalign="center">
                                Background Remover
                            </TitleH2>
                            <Texto
                                color="#666666"
                                fontsize="16px"
                                fontweight="400"
                                fontfamily="Roboto"
                                textalign="center"
                                >
                                Um projeto que utiliza API para remover o fundo de imagens de forma rápida e eficiente, Projeto feito com React e Typescript usando styled-components.
                            </Texto>
                    </DivContainerText>
                    <DivContainerText
                            flexdirection="row"
                            gap="20px"
                            alignitems="center"
                            justifycontent="center"
                            paddingtop="20px">
                            <TitleH2
                                color="#000000"
                                fontsize="14px"
                                fontweight="bold"
                                fontfamily="Roboto"                        
                                textalign="center">
                                Tech Stack:
                            </TitleH2>
                            <Texto
                                color="#666666"
                                fontsize="14px"
                                fontweight="400"
                                fontfamily="Roboto"
                                textalign="center"
                                >
                                React, Typescript, Styled-Components.
                            </Texto>
                    </DivContainerText>
                        <DivFlex
                            flexdirection="row"
                            alignitems="center"
                            justifycontent="center"
                            gap="80px"
                            >
                            <DivContainerText
                                flexdirection="row"
                                gap="10px"
                                alignitems="center"
                                justifycontent="center"
                                paddingtop="20px"                  
                                >
                                <Img 
                                    width={"20px"} 
                                    height={"20px"} 
                                    alignitens="center"
                                    src={link}/>
                                <Link 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href="https://srb-psi.vercel.app/" 
                                    target="_blank"
                                    >                               
                                    Live Preview
                                </Link>
                            </DivContainerText>
                            <DivContainerText
                                flexdirection="row"
                                gap="10px"
                                alignitems="center"
                                justifycontent="center"
                                paddingtop="20px"                  
                                >
                                <Img 
                                    width={"20px"} 
                                    height={"20px"} 
                                    alignitens="center"
                                    src={Git}/>
                                <Link 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href="https://github.com/guiestrela/SRB"
                                    target="_blank"
                                    >                             
                                    Code Preview
                                </Link>
                            </DivContainerText>
                        </DivFlex>         
                    </DivFlex>

                    {/* projeto PCO */}

                    <DivFlex 
                        width="373px" 
                        borderradius="10px"                         
                        backgroundColor="#FFFFFF"
                        flexdirection="column"
                        paddingbottom="40px"                        
                        >
                        <DivFlexImage>
                            <Img
                                borderradius="10px" 
                                src={Pco}/>
                        </DivFlexImage>
                        <DivContainerText
                            flexdirection="column"
                            gap="20px"
                            heightTotal="100px"
                            alignitems="center"
                            justifycontent="center">
                            <TitleH2
                                color="#000000"
                                fontsize="18px"
                                fontweight="bold"
                                fontfamily="Roboto"                        
                                textalign="center">
                                PCO
                            </TitleH2>
                            <Texto
                                color="#666666"
                                fontsize="16px"
                                fontweight="400"
                                fontfamily="Roboto"
                                textalign="center"
                                >
                                Um projeto de uma site para uma ONG real que atua em Brasilia.
                            </Texto>
                    </DivContainerText>
                    <DivContainerText
                            flexdirection="row"
                            gap="20px"
                            alignitems="center"
                            justifycontent="center"
                            paddingtop="20px">
                            <TitleH2
                                color="#000000"
                                fontsize="14px"
                                fontweight="bold"
                                fontfamily="Roboto"                        
                                textalign="center">
                                Tech Stack:
                            </TitleH2>
                            <Texto
                                color="#666666"
                                fontsize="14px"
                                fontweight="400"
                                fontfamily="Roboto"
                                textalign="center"
                                >
                                React, Typescript, Styled-Components.
                            </Texto>
                    </DivContainerText>
                        <DivFlex
                            flexdirection="row"
                            alignitems="center"
                            justifycontent="center"
                            gap="80px"
                            >
                            <DivContainerText
                                flexdirection="row"
                                gap="10px"
                                alignitems="center"
                                justifycontent="center"
                                paddingtop="20px"                  
                                >
                                <Img 
                                    width={"20px"} 
                                    height={"20px"} 
                                    alignitens="center"
                                    src={link}/>
                                <Link 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href="https://pco-seven.vercel.app/" 
                                    target="_blank"
                                    >                               
                                    Live Preview
                                </Link>
                            </DivContainerText>
                            <DivContainerText
                                flexdirection="row"
                                gap="10px"
                                alignitems="center"
                                justifycontent="center"
                                paddingtop="20px"                  
                                >
                                <Img 
                                    width={"20px"} 
                                    height={"20px"} 
                                    alignitens="center"
                                    src={Git}/>
                                <Link 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href="https://github.com/guiestrela/PCO"
                                    target="_blank"
                                    >                             
                                    Code Preview
                                </Link>
                            </DivContainerText>
                        </DivFlex>         
                    </DivFlex>
                </DivFlex>
                
            </DivFlex>
        </>
    )
}

export default ProjectGrid;

