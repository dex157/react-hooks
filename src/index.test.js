import { createElement, HookManager, initilizeHooks, deinitilizeHooks } from './index'



it('createElement return fiberNode', () => {
  const component = jest.fn()
  const props = {}
  expect(createElement(component, props)).toEqual({
    render: component,
    props,
    hookStack: null
  })
})

it('createElement initialize hookStack', () => {
  const component = ({ variable }) => {
    const [state, changeState] = HookManager.useState(variable)
    changeState(state + 1)
    return state
  }

  const props = { variable: 1 }
  const fiberNode = createElement(component, props)

  initilizeHooks(fiberNode)
  expect(fiberNode.render(fiberNode.props)).toEqual(1)
  deinitilizeHooks(fiberNode)

  initilizeHooks(fiberNode)
  expect(fiberNode.render(fiberNode.props)).toEqual(2)
  deinitilizeHooks(fiberNode)
})
