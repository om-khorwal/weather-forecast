import React from "react";

type props = {
    width?: string;
    className?  : string;
    height?: string;
    color?: string;
}
const Hamburger: React.FC<props> = (
    {
    className = '',
    width = '24',
    height = '24',
    color = 'currentColor'
    }
)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={color}
        className={`${className}`}
        width={width}
        height={height}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

    )

}

export default Hamburger;