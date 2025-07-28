import { useState } from "react";
import { MenuBurguer, ButtonBurger } from "./style";
import LinkMenu from "../LinkMenu";
import { DivFlex, DivFlexLogo, Img, LinkTo } from "../../../uiKit";

import gitlogo from "../../icons/gitIconGrey.svg";
import linkedinlogo from "../../icons/linkedinIconGrey.svg";


export function MenuHamburguer() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <DivFlex
            position="fixed"            
            alignitems="center"
            justifycontent="flex-end"
            >
            <ButtonBurger
            onClick={() => setOpen(!open)}
            backgroundColor="none"
            border="none"            
            fontsize="32px"           
            padding="5px"
            aria-label="Abrir menu"
        >
            &#9776;
        </ButtonBurger>
        {open && (
            <MenuBurguer
            isOpend={open}
            background="#fff"
            borderradius="10px"
            padding="20px"
            margin="200px 0 0 0"
            width="250px"
            height="100%"            
            fontfamily="Roboto"
            fontsize="24px"            
            flexdirection="column"
            alignitems="center"
            justifycontent="center"
            position="absolute"
            >
            <ul>
                <li>
                <LinkMenu 
                            linkto="/" 
                            text="Home" />
                </li>
                <li>
                <LinkMenu 
                            linkto="/SobreMin" 
                            text="Sobre" />
                </li>
                <li>
                <LinkMenu 
                            linkto="/Conhecimentos" 
                            text="Conhecimentos" />
                </li>
                <li>
                <LinkMenu 
                            linkto="/Projetos" 
                            text="Projetos" />
                </li>
                <li>
                <LinkMenu 
                            linkto="/Contatos" 
                            text="Contatos" />
                </li>               
            </ul>
            <DivFlexLogo 
                gap="10px"
                justifycontent="center"
                flexdirection="column"
                alignitems="center"
                >                        
                <LinkTo 
                    href="https://github.com/guiestrela" target="_blank">
                    <Img src={gitlogo} />
                </LinkTo>                    
                <LinkTo 
                    href="https://www.linkedin.com/in/guilherme-estrela-4166a539/" 
                    target="_blank">                            <Img src={linkedinlogo} />
                </LinkTo>
                </DivFlexLogo>
            </MenuBurguer>
        )}

        </DivFlex>
        
        </>
    );
}

export default MenuHamburguer;
