import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
  const reset = () => {
    store.dispatch({
      type: 'RESET'
    })
  }
  const getStats = () => {
    const good = store.getState().good
    const ok = store.getState().ok
    const bad = store.getState().bad
    if((good+ok+bad)<1)return
    return (
    <div>
        <p>all {good+ok+bad}</p>
        <p>average {(good-bad)/(good+ok+bad)} </p>
        <p>positive {(good)/(good+ok+bad)*100}%  </p>
    </div>

        )
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset} >reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div> {getStats()}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
