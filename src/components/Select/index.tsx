import { useState } from 'react'
import { Container, Indicator, SelectNo, SelectYes, Title } from './styles'

type SelectProps = {
  onSelect: (value: string) => void;
}

export function Select({ onSelect }: SelectProps) {
  const [selected, setSelected] = useState('')

  const handleSelect = (value: string) => {
    setSelected(value)
    onSelect(value)
  }

  return (
    <Container>
      <SelectYes
        active={selected === 'yes'}
        onPress={() => handleSelect('yes')}
      >
        <Indicator type="yes" />
        <Title>Sim</Title>
      </SelectYes>

      <SelectNo active={selected === 'no'} onPress={() => handleSelect('no')}>
        <Indicator type="no" />
        <Title>Não</Title>
      </SelectNo>
    </Container>
  )
}
