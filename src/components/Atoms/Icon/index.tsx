import React from 'react'
import { IconInterface } from './interface'
import { Container, IconBack, IconBooksMark } from './styles'

export function Icon(props: IconInterface) {
const {color='#fff', isBack = true, size=50} = props
  return (
    <Container>
       { isBack && <IconBack {...props} size={size} color={color} />}
       { !isBack && <IconBooksMark {...props} size={size} color={color}/>}
    </Container>
  )
}
