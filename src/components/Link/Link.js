import React from "react";

export default function Link({to, children, className, onClick}) {
  // let onHome = window.location.pathname === '/';
  // let external = to.match('/|@');

  // if (external) {
  return <a href={to} className={className} onClick={onClick}>{children}</a>
  // } else {
  //     if (!onHome) {
  //         return <a href={'/#' + to} className={className} onClick={onClick}>{children}</a>
  //     } else {
  //         return <ScrollLink
  //             to={to}
  //             className={className}
  //             smooth={true}
  //             duration={350}
  //             spy={true}
  //             onClick={onClick}
  //         >
  //             {children}
  //         </ScrollLink>
  //     }
  // }
}
