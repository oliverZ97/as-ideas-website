import React from "react"
import MainNav from "./MainNav/MainNav";
import Footer from "./Footer/Footer";

export default ({children}) => (
  <article className='app'>
    <MainNav/>
    {children}
    <Footer/>

  </article>
)
