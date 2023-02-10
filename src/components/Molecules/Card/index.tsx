import React from 'react'
import { Image } from '../../Atoms/Image'
import { CardInterface } from './interface'
import { ListCard, MainCard } from './styles'
import Poster from '../../../../assets/poster1.png'
import {Details} from '../../Atoms/Details'

export function Card(props: CardInterface) {
  const {isList = false, DetailsProps, ImageProps,backgroundColor='#08518d'} = props;
  return (
    <>
      {isList && 
        <ListCard backgroundColor={backgroundColor}>
            <Image {...ImageProps} source={Poster} height={70} width={60} radius={0} resizeMode='contain'/>
            <Details {...DetailsProps}/>
        </ListCard>
      }
      {!isList && 
        <MainCard backgroundColor={backgroundColor}>
          <Image {...ImageProps} source={Poster} height={300} width={300} radius={0} resizeMode={'center'}/>
          <Details {...DetailsProps}/>
        </MainCard>
      }
    </>
  )
}

// source={Poster} height={20} width={20} radius={10} resizeMode={'contain'}
// title='Avatar 2' subtitle='O inimigo agora é outro'