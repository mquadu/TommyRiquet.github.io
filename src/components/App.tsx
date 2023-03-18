import { useState } from 'react'

import { Box } from '@mui/material'

import { Navbar, Footer, Resume, PortfolioView, About, Home } from './app/'

import { Loading } from 'components/common'

import { useAppContext } from 'context/AppContext'

import theme from '../theme'


export interface Views {
	[key: string]: () => JSX.Element
}

const views: Views = {
	'home': Home,
	'about': About,
	'portfolio': PortfolioView,
	'resume': Resume
}

const App = () => {
	const [view, setView] = useState<string>('home')
	const { isLoading } = useAppContext()

	if (isLoading){
		return (
			<Box height='100vh' display='flex' justifyContent='center' alignItems='center' sx={{backgroundImage: `linear-gradient(to right bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`}}>
				<Loading/>
			</Box>
		)
	}

	return (
		<Box px={30} sx={{backgroundImage: `linear-gradient(to right bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.dark})`}}>
			<Navbar setView={setView}/>
			{
				views[view]()
			}
			<Footer/>
		</Box>
	)
}

export default App
