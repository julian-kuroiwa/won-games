import {StoryFn} from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const withGlobalStyes = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyes
