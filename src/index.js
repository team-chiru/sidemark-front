// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Config
import configureStore from '~/store/configuration'
// FIXME import registerServiceWorker from 'registerServiceWorker'

// Root
import Root from '~/root/root.component'

// Assets
import '~/assets/styles/global.style.css'
import 'antd/dist/antd.css'

// Inserting the React App in the DOM
ReactDOM.render(<Root store={configureStore()} />, document.getElementById('root'))
// FIXME registerServiceWorker()
