import Bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

Bugsnag.init('YOUR_API_KEY')
Bugsnag.use(bugsnagReact, React)

const ErrorBoundary = Bugsnag.getPlugin('react')

const ErrorScreen = () =>
  <div>
    <h1>⚠️ Error ⚠️</h1>
    <p><strong>Uh oh, there was an error in the component tree!</strong></p>
    <p>This <code>FallbackComponent</code> prop can be used to show something useful to your users when such errors occur.</p>
  </div>

const onError = event => {
  // You can also provide an onError callback to run just on errors caught by
  // the error boundary. Maybe you want to attach some of the current state from
  // whatever model/store you're using (e.g redux)
  console.log('about to send this event', { event })
}

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorScreen} onError={onError}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
