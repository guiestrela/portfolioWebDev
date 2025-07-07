import { 
    DivContainerText, 
    DivFlex, 
    DivFlexImage, 
    Img, 
    LinkTo, 
    Texto, 
    TitleH2 
} from "../../../uiKit";

interface ProjectModelProps {
    foto: string;
    titulo: string;
    descricao: string;
    techStack: string;      
    iconPreview: string;
    iconGit: string;
    linkPreview: string;
    linkGit: string;
}

function ProjectModel({ foto, titulo, descricao, techStack, iconPreview, iconGit, linkPreview, linkGit }: ProjectModelProps) {
    return (
        <>
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
                        src={ foto }/>
                        </DivFlexImage>
                        <DivContainerText
                            flexdirection="column"
                            heightTotal="100px"
                            gap="20px"
                            alignitems="center"
                            justifycontent="center"
                            paddingtopmob="20px"
                            heightmob="140px">
                            <TitleH2
                                color="#000000"
                                fontsize="18px"
                                fontweight="bold"
                                fontfamily="Roboto"                        
                                textalign="center">
                                { titulo }
                            </TitleH2>
                            <Texto
                                color="#666666"
                                fontsize="16px"
                                fontweight="400"
                                fontfamily="Roboto"
                                textalign="center"
                                paddingbottommob="20px"
                                >
                                { descricao }
                            </Texto>
                    </DivContainerText>
                    <DivContainerText
                            flexdirection="row"
                            gap="20px"
                            alignitems="center"
                            justifycontent="center"
                            paddingtop="20px"
                            paddingtopmob="20px">
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
                                { techStack }
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
                                    src={ iconPreview }/>
                                <LinkTo 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href={ linkPreview } 
                                    target="_blank"
                                    >                               
                                    Live Preview
                                </LinkTo>
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
                                    src={ iconGit }/>
                                <LinkTo 
                                    fontsize="14px"
                                    fontweight="400"
                                    fontfamily="Roboto"
                                    color="#000000"
                                    href={ linkGit}
                                    target="_blank"
                                    >                             
                                    Code Preview
                                </LinkTo>
                            </DivContainerText>
                        </DivFlex>         
                    </DivFlex>

        </>
    );
}

export default ProjectModel;