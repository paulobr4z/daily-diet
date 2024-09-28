import styled, { css } from 'styled-components/native'

import ArrowUpRightGreen from '../../assets/arrow-up-right-green.svg'

export const Container = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  margin-top: 32px;
  padding: 24px;
  border-radius: 8px;
  gap: 8px;
`

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const PercentageSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Icon = styled(ArrowUpRightGreen)`
  position: absolute;
  top: 12px;
  right: 12px;
`
