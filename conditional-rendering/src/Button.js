import React from 'react';

function Button(props) {

  return props.hasOwnProperty("href") ? <a className={`react-button  ${props.shape}`} href={props.href}>Link</a> : <button className={`react-button  ${props.shape}`} disabled={props.disabled} >{props.children}</button>
}

export default Button;