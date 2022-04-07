import React from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

export default function ButtonLink(props) {
  return (

    <a href={props.href} className={props.className}>

      {props.children}
    </a>
  );
}
