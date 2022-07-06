const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}



const good = (state) => {

  return Object.assign({
    good: state.good+1,
    ok: state.ok,
    bad: state.bad
  })
}
const ok = (state) => {

  return Object.assign({
    good: state.good,
    ok: state.ok+1,
    bad: state.bad
  })
}
const bad = (state) => {

  return Object.assign({
    good: state.good,
    ok: state.ok,
    bad: state.bad+1
  })
}
const reset = (state) => {

  return {
    good: 0,
    ok: 0,
    bad: 0
  
}
}
const counterReducer = (state = initialState, action) => {
  
  switch (action.type) {
   
    case 'GOOD':
       
    return good(state)
    case 'OK':
      return state
    case 'BAD':
      return bad(state)
    case 'ZERO':
      return ok(state)
    case "RESET":
      return reset(state)
      default: return state
  }
  
}

export default counterReducer