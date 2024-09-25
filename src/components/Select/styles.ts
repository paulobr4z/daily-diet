import styled, { css } from 'styled-components/native'

type SelectProps = {
  active?: boolean
  type?: 'yes' | 'no'
}

export const Container = styled.View<SelectProps>`
  flex-direction: row;
  gap: 8px;
`

export const SelectYes = styled.TouchableOpacity<SelectProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  gap: 8px;
  padding: 16px;
  border-radius: 6px;

  ${({ theme, active }) => active && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
    border: 1px solid ${theme.COLORS.GREEN_DARK};
  `};
`

export const SelectNo = styled.TouchableOpacity<SelectProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  gap: 8px;
  padding: 16px;
  border-radius: 6px;

  ${({ theme, active }) => active && css`
    background-color: ${theme.COLORS.RED_LIGHT};
    border: 1px solid ${theme.COLORS.RED_DARK};
  `};
`

export const Indicator = styled.View<SelectProps>`
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background-color: ${({ theme, type }) => type === 'yes'
? theme.COLORS.GREEN_DARK
: theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
