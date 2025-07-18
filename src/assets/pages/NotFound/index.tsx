import { DivContainerText, DivFlex, TitleH2 } from "../../../uiKit";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function NotFound() {
    return (
        <>
            <Header />
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
                                        textalign="center"                  color="#42446e">
                                        Pagina Não Encontrada
                                    </TitleH2>
                            </DivContainerText>
                        </DivFlex>
                    </DivFlex> 
            <Footer />
        </>
    );
}

export default NotFound;
