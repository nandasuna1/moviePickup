import React from 'react'
import { IconInterface } from './interface'
import { Container, IconBack, IconBooksMark } from './styles'

export function Icon({name,
  size=50, 
  isBack, 
  color='#fff', 
  onPress = () => {},
  ...rest
  }: IconInterface) {


  return (
    <Container onPress={onPress}>
      { isBack && <IconBack size={size} color={color}   {...rest}/>}
       { !isBack && <IconBooksMark  size={size} color={color} {...rest}/>}
    </ Container>

  )
}
