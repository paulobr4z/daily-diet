export type HistoryDTO = {
  id: string,
  time: string,
  title: string,
  type: 'positive' | 'negative'
  created_at: string
}

export type HistoryByDayDTO = {
  title: string
  data: HistoryDTO[]
}
