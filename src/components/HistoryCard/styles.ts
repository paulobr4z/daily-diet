import styled, { css } from 'styled-components/native'

type IndicatorProps = {
  type: 'positive' | 'negative'
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 8px;
`

export const Time = styled.Text`
  border-right: 1px solid rebeccapurple;
  padding: 0 12px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Title = styled.Text`
  flex: 1;
  padding: 0 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const Indicator = styled.View<IndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 99px;
  margin: 0 12px;
  background-color: ${({ theme, type }) => type === 'positive'
? theme.COLORS.GREEN_MID
: theme.COLORS.RED_MID};
`
