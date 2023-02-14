import React from 'react'
import { DetailsInterface } from './interface'
import { Container, Subtitle, Title } from './styled'

export function Details(props: DetailsInterface) {

const { subtitle='subtitle', title='Title', color = '#fff', isMain=true} = props
  return (
    <Container>
        <Title isMain={isMain} color={color}>{title}</Title>
        {subtitle && <Subtitle color={color}>{subtitle}</Subtitle>}
    </Container>
  )
}
