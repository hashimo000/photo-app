import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(<App />)