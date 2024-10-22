import React from 'react';
import './_logoComponent.scss';

export function LogoComponent({align, color, padding}) {
  return (
    <h1 style={{textAlign:align, color:color, padding: padding}} className='logo'>Trendstep.in<i className='bx bx-basketball'></i></h1>
  )
}
