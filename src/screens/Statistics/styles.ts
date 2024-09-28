import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  type: 'positive' | 'negative' | 'neutral'
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  ${({ theme, type }) => type === 'positive' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ theme, type }) => type === 'negative' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `};

  ${({ theme, type }) => type === 'neutral' && css`
    background-color: ${theme.COLORS.GRAY_500};
  `};
`

export const ContainerHeader = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 0;
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 24px;
`

export const ContainerGeneralStatistics = styled.View`
  flex: 1;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 32px 24px;
  gap: 12px;
`

export const GeneralStatisticsTitle = styled.Text`
  width: 100%;
  text-align: center;
  margin-bottom: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Score = styled.View`
  align-items: center;
  gap: 8px;
  padding: 24px 16px 16px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
`

export const ScoreTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const ScoreSubtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const ScorePositive = styled.View`
  flex: 2;
  align-items: center;
  gap: 8px;
  padding: 24px 16px 16px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
`

export const ScoreNegative = styled.View`
  flex: 2;
  align-items: center;
  gap: 8px;
  padding: 24px 16px 16px 16px;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`
