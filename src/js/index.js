import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import Header from './components/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font: 1rem/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    max-width: 960px;
    margin: 0 auto;
    padding: 1.5rem;
  }
`

const StoryIndex = React.lazy(() => import('./components/StoryIndex'))
const Story = React.lazy(() => import('./components/Story'))

function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path='/' component={StoryIndex} />
            <Route path='/page' component={StoryIndex} />
            <Route path='/story' component={Story} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
      </Router>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)