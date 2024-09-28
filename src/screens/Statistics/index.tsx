import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import * as S from './styles'

import Back from '../../assets/back-black.svg'
import BackGreen from '../../assets/back-green.svg'
import BackRed from '../../assets/back-red.svg'
import { View } from 'react-native'

type RouteParams = {
  type: 'positive' | 'negative' | 'neutral';
}

export function Statistics() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute()

  const { type } = route.params as RouteParams

  function renderIcon() {
    switch (type) {
      case 'neutral':
        return <Back />
      case 'positive':
        return <BackGreen />
      case 'negative':
        return <BackRed />
      default:
        return null
    }
  }

  return (
    <S.Container type={type}>
      <S.ContainerIcon onPress={() => navigation.navigate('home')}>
        {renderIcon()}
      </S.ContainerIcon>
      <S.ContainerHeader>
        <S.HeaderTitle>90,86%</S.HeaderTitle>
        <S.HeaderSubtitle>das refeições dentro da dieta</S.HeaderSubtitle>
      </S.ContainerHeader>
      <S.ContainerGeneralStatistics>
        <S.GeneralStatisticsTitle>Estatísticas gerais</S.GeneralStatisticsTitle>
        <S.Score>
          <S.ScoreTitle>22</S.ScoreTitle>
          <S.ScoreSubtitle>
            melhor sequência de pratos dentro da dieta
          </S.ScoreSubtitle>
        </S.Score>
        <S.Score>
          <S.ScoreTitle>109</S.ScoreTitle>
          <S.ScoreSubtitle>
            refeições registradas
          </S.ScoreSubtitle>
        </S.Score>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <S.ScorePositive>
            <S.ScoreTitle>99</S.ScoreTitle>
            <S.ScoreSubtitle>
              refeições dentro da dieta
            </S.ScoreSubtitle>
          </S.ScorePositive>
          <S.ScoreNegative>
            <S.ScoreTitle>10</S.ScoreTitle>
            <S.ScoreSubtitle>
              refeições fora da dieta
            </S.ScoreSubtitle>
          </S.ScoreNegative>
        </View>
      </S.ContainerGeneralStatistics>
    </S.Container>
  )
}
