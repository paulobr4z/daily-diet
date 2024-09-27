import * as S from './styles'

// import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import { HeaderHome } from '../../components/HeaderHome'
import { Percentage } from '../../components/Percentage'

export function Home() {
  // const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <S.Container>
      <HeaderHome />
      <Percentage />
    </S.Container>
  )
}
