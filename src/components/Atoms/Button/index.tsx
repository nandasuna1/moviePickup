import React from 'react'
import { ButtonInterface } from './interface'
import {ButtonCoponent, Text} from './styles'
import { isEmpty } from 'lodash';
import { Icon } from '../Icon';


export function Button(props: ButtonInterface) {

    const {
        title= 'DEFAULT',
        size = 'normal',
        color = '#fff',
        backgroudColor ='#000',
        isLoading = false,
        disabled = false,
        IconProps,
        // iconPosition = 'side',
    } = props;

    const hasIcon = !isEmpty(IconProps);


  return (
        <ButtonCoponent 
            color={color}
            backgroudColor={backgroudColor}
            size={size}
            isLoading={isLoading}
            disabled={disabled}
        >
          {hasIcon && <Icon {...IconProps}/>}
          <Text color={color}>{title}</Text>
        </ButtonCoponent>
  )
}
