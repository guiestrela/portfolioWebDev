import { DivContainerText, DivFlex, Texto, Title } from "../../../uiKit";

function AboutMe() {
    return (
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
                    flexdirection="column">
                    <DivContainerText
                        flexdirection="column"
                        paddingTotal="0 20px">
                        <Title
                            fontfamily="Roboto"
                            fontsize="58px"
                            fontweight="700"
                            textalign="center"
                            color="#42446e">
                            Sobre Mim
                        </Title>
                        <Texto
                            fontfamily="Roboto"
                            fontsize="25px"
                            fontweight="400"
                            textalign="start"
                            color="#666666"
                            paddingtop="80px"
                            >
                            Olá! Sou um desenvolvedor web com experiência em criar aplicações modernas e responsivas. Minha paixão é transformar ideias em realidade através da programação.
                        </Texto>
                            <Texto
                            fontfamily="Roboto"
                            fontsize="25px"
                            fontweight="400"
                            textalign="start"
                            color="#666666"
                            paddingtop="80px"
                            >                            
                            Tenho habilidades sólidas em <strong>React</strong> assim como, HTML, CSS, JavaScript e Typescript, e estou sempre aprendendo novas tecnologias para aprimorar minhas habilidades. Estou animado para contribuir com projetos desafiadores e colaborar com equipes talentosas.
                            Se você está procurando um desenvolvedor dedicado e criativo, estou aqui para ajudar. Vamos criar algo incrível juntos!
                        </Texto>
                        <DivContainerText
                            flexdirection="column"
                            paddingTotal="100px 0px">
                            <Title
                                fontfamily="Roboto"
                                fontsize="58px"
                                fontweight="700"
                                textalign="center"
                                color="#42446e"
                                
                                >
                                Formação
                            </Title>
                            <Texto
                                fontfamily="Roboto"
                                fontsize="25px"
                                fontweight="400"
                                textalign="start"
                                color="#666666"
                                paddingtop="80px"
                                >
                                Tecnólogo , Superior de Tecnologia em Desenvolvimento Web
                            </Texto>
                            <DivContainerText
                                justifycontent="space-between">
                                <Texto
                                    fontfamily="Roboto"
                                    fontsize="25px"
                                    fontweight="bold"
                                    textalign="start"
                                    color="#666666"
                                    paddingtop="10px"
                                    >                            
                                    Anhanguera Educacional
                                </Texto>
                                <Texto
                                    fontfamily="Roboto"
                                    fontsize="20px"
                                    fontweight="300"
                                    textalign="start"
                                    color="#666666"
                                    paddingtop="10px"
                                    >                            
                                    Jan - 2023 - Dez - 2024
                                </Texto>
                            </DivContainerText>
                        </DivContainerText>
                    </DivContainerText>                      
                </DivFlex>
            </DivFlex>                
        </>
    );
}

export default AboutMe;
