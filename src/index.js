// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

// Config
import configureStore from 'store/configuration'
import registerServiceWorker from 'registerServiceWorker'

// Root
import Root from 'root/Root.component'

// Assets
import 'assets/styles/global.style.css'
import 'antd/dist/antd.css'

// Inserting the React App in the DOM
ReactDOM.render(<Root store={configureStore()} />, document.getElementById('root'))
registerServiceWorker()

// Specify the root of the modal
Modal.setAppElement(document.getElementById('root'))
