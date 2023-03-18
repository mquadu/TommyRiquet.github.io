import { useState } from 'react'

import { Box, Typography, Switch, FormControlLabel } from '@mui/material'

import PortfolioCardView from './PortfolioCardView'
import PortfolioTableView from './PortfolioTableView'

import theme from '../../../theme'

import hackaton from 'static/img/HackatonClip.jpg'
import ctf from 'static/img/CTFClip.jpg'
import devday from 'static/img/DevDayClip.jpg'
import cscbe from 'static/img/CSCBEClip.png'
import java from 'static/img/JavaClip.png'
import sass from 'static/img/SassClip.png'
import affairepatterson from 'static/img/AffairePattersonClip.jpg'

export interface PortfolioInformationI {
	title: string
	theme: string
	validatedTime: number
	realTime: string | number
	description: string
	link?: string | null
	proof?: string[]
}

export const PortfolioInformations : PortfolioInformationI[] = [
	{
		title: 'L\'affaire Patterson',
		theme: 'Formation',
		validatedTime: 10,
		realTime: '500+',
		description: 'A one-hour film directed by 11 students from the Computer Science section of EPHEC. This film was shot in 15 days and was presented during a premiere at EPHEC.',
		link: affairepatterson,
		proof: []
	},
	{
		title: 'Hackaton Ephec',
		theme: 'Hackaton',
		validatedTime: 10,
		realTime: 48,
		description: 'This hackathon was organized by EPHEC and lasted for 48 hours. It was carried out in teams of 4 people',
		link: hackaton,
		proof: []
	},
	{
		title: 'CTF Ephec',
		theme: 'CTF',
		validatedTime: 10,
		realTime: 10,
		description: 'Two EPHEC students organized a Capture The Flag.',
		link: ctf,
		proof: []
	},
	{
		title: 'Cyber Security Challenge',
		theme: 'CTF',
		validatedTime: 10,
		realTime: 10,
		description: 'Cyber Security Challenge',
		link: cscbe,
		proof: []
	},
	{
		title: 'Dev-Day Louvain-La-Neuve',
		theme: 'Conférence',
		validatedTime: 8,
		realTime: 8,
		description: 'On November 23, 2021, the DevDay Conference took place at the Cinéscope in Louvain-La-Neuve.',
		link: devday,
		proof: []
	},
	{
		title: 'Formation OpenClassroom Java',
		theme: 'Formation',
		validatedTime: 10,
		realTime: 40,
		description: 'OpenClassroom training to learn the basics of the Java language.',
		link: java,
		proof: []
	},
	{
		title: 'Formation OpenClassroom Sass',
		theme: 'Formation',
		validatedTime: 10,
		realTime: 15,
		description: 'OpenClassroom training to learn the basics of Sass.',
		link: sass,
		proof: []
	}
]


const Portfolio = () => {
	const [checked, setChecked] = useState<boolean>(false)

	return (
		<>
			<Box display='flex' flexDirection='column' alignItems='center' minHeight='100vh' pb={4}>
				<Box display='flex' flexDirection='column' alignItems='center' width='100%'>
					<Typography variant='h3' sx={{ color: theme.palette.primary.main }} pt={8}>
						Portfolio
					</Typography>
					<Typography variant='h6' sx={{ color: theme.palette.primary.main }} pt={2}>
						Here&apos;s a few of my <span style={{color: theme.palette.primary.dark}}>projects</span>
					</Typography>
					<Box display='flex' width='100%' flexDirection='row' justifyContent='end'>
						<Box alignSelf='center'>
							<Typography sx={{ color: theme.palette.primary.main }}>Card</Typography>
						</Box>
						<Switch onChange={() => setChecked(!checked)}/>
						<Box alignSelf='center'>
							<Typography sx={{ color: theme.palette.primary.main }}>Table</Typography>
						</Box>
					</Box>
				</Box>
				<Box width='100%' pt={3}>
					{
						checked ?
							<PortfolioTableView PortfolioInformations={PortfolioInformations}/>
							:
							<PortfolioCardView PortfolioInformations={PortfolioInformations}/>
					}
				</Box>
			</Box>
		</>
	)
}

export default Portfolio
