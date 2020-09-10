import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors.primary};
      bottom: 0;
      transform: translateY(0.5rem);
    }
  `,
}

export const Wrapper = styled.h2`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color]}
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
