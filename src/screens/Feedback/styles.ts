import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  type: 'positive' | 'negative'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  ${({ theme, type }) => type === 'negative' && css`
    color: ${theme.COLORS.RED_DARK};
  `};
`

export const SubTitle = styled.Text`
  margin-bottom: 40px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Spacer = styled.View`
  height: 32px;
`
