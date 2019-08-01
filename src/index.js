const useState = () => { }

export const LinkedList = {}

export let HookManager = {}

const createUseState = (hookStack) => {
    return (defaultValue) => {
        if (!HookManager.current) {
          const value = defaultValue
          const hook = {
            value: defaultValue,
            next: null
          }
          HookMananger.current = hook
          const setValue = (newValue) => {
            value = newValue
            hook.value = newValue
          }
          return [value, setValue]
        } else {
          const value = HookManager.current.value
          const hook = HookManager.current
          const setValue = (newValue) => {
            value = newValue
            hook.value = newValue
          }
          HookManager.current = HookManager.current.next
          return [value, setValue]
        }
    }
}

/* hook 
{
    fiberNodeRef: ref, hooksStack: null
}
 */
export const initilizeHooks = (fiberNode) => {
    HookManager = {useState: createUseState(fiberNode.hookStack), }
    fiberNode.hookStack = fiberNode.hookStack ? .. : 
}

export const deinitializeHooks = () => { }

export function createElement(component, props) {
  return {
    render: component,
    props,
    hookStack: null
  }
}

/* hookState example

const hookState = {
  value: { foo: 'bar' },
  next: {
    value: {},
    next: { value: {}, next: null }
  }
}
 */
