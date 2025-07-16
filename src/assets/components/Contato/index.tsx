import { DivContainerText, DivFlex, Texto, TitleH2 } from "../../../uiKit";

function Contato() {
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
                    paddingTotal="180px 0"                         justifycontent="space-between"
                    flexdirection="column">
                    <DivContainerText
                        flexdirection="column"
                        paddingTotal="0 20px">
                        <TitleH2
                            fontfamily="Roboto"
                            fontsize="38px"
                            fontweight="700"
                            textalign="center"                                color="#42446e">
                            Email:
                        </TitleH2>
                        <Texto
                            fontfamily="Roboto"
                            fontsize="30px"
                            fontweight="400"
                            textalign="start"
                            color="#666666"                                paddingtop="10px">                                 guilhermestrela@gmail.com
                        </Texto>
                    </DivContainerText>
                    <DivContainerText
                        flexdirection="column"
                        paddingTotal="80px 20px 0">
                        <TitleH2
                            fontfamily="Roboto"
                            fontsize="38px"
                            fontweight="700"
                            textalign="center"                                color="#42446e">
                            Telefone:
                        </TitleH2>
                        <Texto
                            fontfamily="Roboto"
                            fontsize="30px"
                            fontweight="400"
                            textalign="start"
                            color="#666666"                                paddingtop="10px">                                 
                            +55 (61) 99830-6076
                        </Texto>
                    </DivContainerText>                                 
                </DivFlex>
            </DivFlex> 
        </>
    );
}

export default Contato;
