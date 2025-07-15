import { NavLink } from "react-router-dom";
import { LinkTo } from "../../../uiKit";

interface LinkMenuProps {
    linkto: string;
    text: string;
}

function LinkMenu({ linkto, text }: LinkMenuProps) {
    return (
        <div>
            <NavLink to={linkto} style={{ textDecoration: "none" }}>
                <LinkTo
                    color="#666666"
                    fontfamily="Roboto"
                    fontsize="20px"
                    fontweight="400"
                    hoverdecoration="none"
                    hovercolor="#2c9cec">
                    {text}
                </LinkTo>
            </NavLink>
        </div>
    );
}

export default LinkMenu;