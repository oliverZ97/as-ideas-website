import React from "react"
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";

export default ({children}) => (
  <article className='app'>
    <MainNav/>
    {children}
    <Footer/>

  </article>
)
