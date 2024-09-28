import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 24px;
`

export const ContainerNewSnack = styled.View`
  margin-top: 40px;
  gap: 8px;  
`

export const TitleNewSnack = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_100};
      font-family: ${theme.FONT_FAMILY.REGULAR};
    `};  
`

export const SectionListTitle = styled.Text`
  margin-top: 32px;

  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LG}px;
      color: ${theme.COLORS.GRAY_100};
      font-family: ${theme.FONT_FAMILY.BOLD};
    `};  
`
