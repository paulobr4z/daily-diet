import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 99px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`
