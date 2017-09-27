import React from "react";
import { MainNav } from "./../MainNav/MainNav";
import "./../Hero/Hero.css";


export const Hero = (props) => {
  // Component to be wrapped in Hero, given as props
  // Has a simple typecheck if prop is missing, aka undefined
  const Wrapped = props.wrapped !== undefined ? props.wrapped : () => (<div></div>);
   // Define CSS class depending on prop 'cssAddon'
  const heroCSSClass = props.cssAddon !== undefined ? `hero hero--${props.cssAddon}` : "hero";
  
  return (
    <div className={heroCSSClass}>
      <MainNav {...props} />
      <Wrapped />
    </div>
  );
};