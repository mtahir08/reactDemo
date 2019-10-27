function counter(state = 0, action) {

  switch (action.type) {
    case 'INCREMENT': {
      return state += action.val
    }
    case 'DECREMENT': {
      return state -= action.val
    }
    default: return state;
  }
}

export default counter;