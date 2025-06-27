import { 
    DivContainerText, 
    DivFlex, 
    DivFlexImage, 
    Img, 
    Texto, 
    TitleH2 } from "../../../uiKit";

import HTML from "../../icons/vscode-icons_file-type-html.svg"
import CSS from "../../icons/vscode-icons_file-type-css.svg"
import JavaScript from "../../icons/vscode-icons_file-type-js-official.svg"
import React from "../../icons/logos_react.svg"
import TypeScript from "../../icons/ts-logo-128.svg"
import Vscode from "../../icons/vscode-icons_file-type-vscode.svg"
import Git from "../../icons/logos_git-icon.svg"
import Github from "../../icons/akar-icons_github-fill.svg"

function TechStack() {
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
                            Meus Conhecimentos
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
                            Aqui estão algumas das tecnologias que eu tenho conhecimento e experiência.
                        </Texto>
                    </DivContainerText>
                    <DivFlexImage                    
                        alignitems="center"
                        justifycontent="center"
                        gap="80px"
                        widthTotal="80px"
                        paddingbottom="80px"                  
                        widthmob="60px"
                        justifycontentmob="center"
                        alignitemsmob="start"
                        displaymob="grid"
                        gridcolumn="60px 60px 60px">
                        <Img src={HTML}/>
                        <Img src={CSS}/>
                        <Img src={JavaScript}/>
                        <Img src={React}/>
                        <Img src={TypeScript}/>   
                        <Img src={Vscode}/>               
                        <Img src={Git}/>
                        <Img src={Github}/>                
                    </DivFlexImage>
                    
                </DivFlex>
            </DivFlex>
        </>
        
    )
}
export default TechStack;