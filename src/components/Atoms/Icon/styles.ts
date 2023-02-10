import { size } from 'lodash'
import { ArrowCircleLeft, Bookmarks } from 'phosphor-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled , {css} from 'styled-components/native'
import { IconInterface } from './interface'

export const Container = styled.View``


export const IconBack = styled(ArrowCircleLeft)<IconInterface>`
    ${({size}) =>
    size &&
    css `
    size: ${RFValue(size)}px;
    `
    }
    ${({color}) =>
    color &&
    css `
    color: ${color}
    `
    }
`

export const IconBooksMark = styled(Bookmarks)<IconInterface>`
    ${({size}) =>
    size &&
    css `
    size: ${RFValue(size)}px;
    `
    }
    ${({color}) =>
    color &&
    css `
    color: ${color}
    `
    }
`