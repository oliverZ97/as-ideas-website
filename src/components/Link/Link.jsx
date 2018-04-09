import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Link({ to, children, className }) {
    let onHome = window.location.pathname === '/';
    let external = to.match('\/|@')

    if (external) {
        return <a className={className} href={to}>{children}</a>
    } else {
        if (!onHome) {
            return <a href={'/#' + to} className={className}>{children}</a>
        } else {
            return <ScrollLink
                to={to}
                className={className}
                smooth={true}
                duration={350}
                spy={true}
            >
                {children}
            </ScrollLink>
        }
    }
}