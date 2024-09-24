import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'

import Plus from '../../assets/plus.svg'
import Trash from '../../assets/trash.svg'
import Pencil from '../../assets/pencil.svg'
import { useEffect } from 'react'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  fullWidth?: boolean;
  icon?: 'Plus' | 'Trash' | 'Pencil'
}

export function Button({
  title,
  type = 'PRIMARY',
  fullWidth = true,
  icon,
  ...rest
}: Props) {
  function renderIcon() {
    switch (icon) {
      case 'Plus':
        return <Plus />
      case 'Trash':
        return <Trash />
      case 'Pencil':
        return <Pencil />
      default:
        return null
    }
  }

  useEffect(() => {}, [icon])

  return (
    <Container fullWidth={fullWidth} type={type} {...rest}>
      {renderIcon()}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
