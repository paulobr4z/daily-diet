import { useState } from 'react'
import { Select } from '../../components/Select'
import * as S from './styles'

import { Text } from 'react-native'

export function Home() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <S.Container>
      <Text>{selectedValue}</Text>

      <Select onSelect={handleSelect} />
    </S.Container>
  )
}
