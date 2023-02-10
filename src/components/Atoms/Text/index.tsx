import React from 'react'
import { TextInterface } from './interface'

export  function MyText(props: TextInterface) {
  return <MyText {...props}>{props.children}</MyText>;
}
