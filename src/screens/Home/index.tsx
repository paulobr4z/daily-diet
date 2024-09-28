import * as S from './styles'

import { HeaderHome } from '../../components/HeaderHome'
import { Percentage } from '../../components/Percentage'
import { Button } from '../../components/Button'
import { SectionList } from 'react-native'
import { historyData } from './data'
import { HistoryCard } from '../../components/HistoryCard'
import { useState } from 'react'
import { HistoryByDayDTO } from '../../dtos'

export function Home() {
  const [history] = useState<HistoryByDayDTO[]>(
    historyData as HistoryByDayDTO[],
  )

  return (
    <S.Container>
      <HeaderHome />
      <Percentage />
      <S.ContainerNewSnack>
        <S.TitleNewSnack>Refeições</S.TitleNewSnack>
        <Button title="Nova refeição" icon="Plus" />
      </S.ContainerNewSnack>

      <SectionList
        sections={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryCard data={item} />}
        renderSectionHeader={({ section }) => (
          <S.SectionListTitle>{section.title}</S.SectionListTitle>
        )}
        style={{ marginTop: 16, marginBottom: 8 }}
        contentContainerStyle={
          history.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}
