import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        title="Test"
        subtitle="Sub test"
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        buttonLabel="Click here"
        buttonLink="/link"
      />
    )

    expect(screen.getByTitle(/test/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Sub test/i)).toBeInTheDocument()
    expect(
      screen.GetByRole('img', {
        src: /https:\/\/source.unsplash.com\/user\/willianjusten\/1042x580/i,
      })
    ).toBeInTheDocument()
    //imagem exista
  })
})
