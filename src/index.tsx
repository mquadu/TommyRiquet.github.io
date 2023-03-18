import React from 'react'

import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'

import App from './components/App'

import { AppContextProvider } from 'context/AppContext'
import { GlobalContextProvider } from 'context/GlobalContext'

import theme from './theme'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<ThemeProvider theme={theme}>
				<GlobalContextProvider>
					<CssBaseline />
					<App />
				</GlobalContextProvider>
			</ThemeProvider>
		</AppContextProvider>
	</React.StrictMode>
)
