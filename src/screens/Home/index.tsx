import * as S from './styles'

// import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import { HeaderHome } from '../../components/HeaderHome'

export function Home() {
  // const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <S.Container>
      <HeaderHome />
    </S.Container>
  )
}
