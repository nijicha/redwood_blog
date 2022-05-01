import { render } from '@redwoodjs/testing/web'

import HeaderBanner from './HeaderBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderBanner />)
    }).not.toThrow()
  })
})
