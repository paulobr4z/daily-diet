import * as S from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'

import { Button } from '../../components/Button'

import IlustraPositive from '../../assets/feedback-positive.svg'
import IlustraNegative from '../../assets/feedback-negative.svg'

type RouteParams = {
  type: 'positive' | 'negative' ;
}

export function Feedback() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute()

  const { type } = route.params as RouteParams

  return (
    <S.Container>
      {type === 'positive'
        ? (
          <>
            <S.Title type={type}>Continue assim!</S.Title>
            <S.SubTitle>Você continua dentro da dieta. Muito bem!</S.SubTitle>
            <IlustraPositive />
            <S.Spacer />
            <Button
              title="Ir para a página inicial"
              fullWidth={false}
              onPress={() => navigation.navigate('home')}
            />
          </>
          )
        : (
          <>
            <S.Title type={type}>Que pena!</S.Title>
            <S.SubTitle>
              Você saiu da dieta dessa vez, mas continue se esforçando e não
              desista!
            </S.SubTitle>
            <IlustraNegative />
            <S.Spacer />
            <Button
              title="Ir para a página inicial"
              fullWidth={false}
              onPress={() => navigation.navigate('home')}
            />
          </>
          )}
    </S.Container>
  )
}
