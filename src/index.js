import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const rootNode = document.getElementById('root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(App))
