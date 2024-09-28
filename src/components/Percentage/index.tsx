import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'

export function Percentage() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <S.Container
      onPress={() => navigation.navigate('statistics', { type: 'positive' })}
    >
      <S.Icon />
      <S.PercentageTitle>90,86%</S.PercentageTitle>
      <S.PercentageSubtitle>das refeições dentro da dieta</S.PercentageSubtitle>
    </S.Container>
  )
}
