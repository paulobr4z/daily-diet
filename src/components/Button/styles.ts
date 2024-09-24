import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'OUTLINE'

type Props = {
  type: ButtonTypeStyleProps;
  fullWidth?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${({ theme, type }) => type === 'OUTLINE' && css`
    background-color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_100};
  `};
`

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  ${({ theme, type }) => type === 'OUTLINE' && css`
    color: ${theme.COLORS.GRAY_100};
  `};
`
