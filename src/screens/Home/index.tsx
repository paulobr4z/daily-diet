import { useNavigation } from '@react-navigation/native'
import * as S from './styles'

import { Text, TouchableOpacity } from 'react-native'

export function Home() {
  const navigation = useNavigation()

  return (
    <S.Container>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('statistics')}>
        <Text>Go to Estatísticas</Text>
      </TouchableOpacity>
    </S.Container>
  )
}
