import { HistoryDTO } from '../../dtos'
import * as S from './styles'

type Props = {
  data: HistoryDTO
}

export function HistoryCard({ data }: Props) {
  return (
    <S.Container>
      <S.Time>{data.time}</S.Time>
      <S.Title>{data.title}</S.Title>
      <S.Indicator type={data.type} />
    </S.Container>
  )
}
