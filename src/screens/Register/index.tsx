import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

import { Button, Text } from 'react-native'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'

export function Register() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  return (
    <S.Container>
      <Text>Register</Text>
      <Button
        title="Go to Feedback"
        onPress={() => navigation.navigate('feedback', { type: 'negative' })}
      />
    </S.Container>
  )
}
