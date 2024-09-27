import * as S from './styles'

import Logo from '../../assets/logo.svg'

export function HeaderHome() {
  return (
    <S.Container>
      <Logo />
      <S.Avatar source={{ uri: 'https://github.com/paulobr4z.png' }} />
    </S.Container>
  )
}
