import React from 'react'
import { shallow } from 'enzyme'
import PlusOneButton from './PlusOneButton'
import sinon from 'sinon'

describe('<PlusOneButton />', () => {
  const onClickSpy = sinon.spy()
  const button = shallow(<PlusOneButton onClick={onClickSpy} />)

  it('has a wrapping button tag', () => {
    expect(button).toHaveTagName('button')
  })

  it('has a class name PlusOne', () => {
    expect(button).toHaveClassName('PlusOne')
  })

  it('shows "+"', () => {
    expect(button).toHaveText('+')
  })

  it('clicking the button calls `onClick`', () => {
    button.simulate('click')                                      // SIMULATE A CLICK
    expect(onClickSpy.callCount).toBe(1)                          // CHECK IF SPY WAS CALLED ONCE
  })
})
