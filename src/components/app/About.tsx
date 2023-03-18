import { Box, Typography, Grid } from '@mui/material'
import GitHubCalendar from 'react-github-calendar'

import figma from 'static/icons/figma.svg'
import photoshop from 'static/icons/photoshop.svg'
import bootstrap from 'static/icons/bootstrap.svg'
import materialui from 'static/icons/materialui.svg'
import html5 from 'static/icons/html5.svg'
import javascript from 'static/icons/javascript.svg'
import typescript from 'static/icons/typescript.svg'
import react from 'static/icons/react.svg'
import node from 'static/icons/nodejs.svg'
import express from 'static/icons/express.svg'
import mysql from 'static/icons/mysql.svg'
import python from 'static/icons/python.svg'

import git from 'static/icons/git.svg'
import github from 'static/icons/github.svg'
import vscode from 'static/icons/vscode.svg'
import postman from 'static/icons/postman.svg'

import theme from '../../theme'


const data = [
	{
		'title': <>Knowledge and <span style={{color: theme.palette.primary.dark}}>skills</span></>,
		'icons': [
			{
				'name': 'HTML5',
				'icon': html5,
				link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
			},
			{
				'name': 'Bootstrap',
				'icon': bootstrap,
				link: 'https://getbootstrap.com/'
			},
			{
				'name': 'JavaScript',
				'icon': javascript,
				link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{
				'name': 'TypeScript',
				'icon': typescript,
				link: 'https://www.typescriptlang.org/'
			},
			{
				'name': 'React',
				'icon': react,
				link: 'https://react.dev/'
			},
			{
				'name': 'Material UI',
				'icon': materialui,
				link: 'https://material-ui.com/'
			},
			{
				'name': 'Node',
				'icon': node,
				link: 'https://nodejs.org/en/'
			},
			{
				'name': 'Express',
				'icon': express,
				link: 'https://expressjs.com/'
			},
			{
				'name': 'MySQL',
				'icon': mysql,
				link: 'https://www.mysql.com/'
			},
			{
				'name': 'Python',
				'icon': python,
				link: 'https://www.python.org/'
			},
			{
				'name': 'Figma',
				'icon': figma,
				link: 'https://www.figma.com/'
			},
			{
				'name': 'Adobe Photoshop',
				'icon': photoshop,
				link: 'https://www.adobe.com/products/photoshop.html'
			}
		]
	},
	{
		'title': <>Tools I <span style={{color: theme.palette.primary.dark}}>Use</span></>,
		'icons': [
			{
				'name': 'Git',
				'icon': git,
				link: 'https://git-scm.com/'
			},
			{
				'name': 'Github',
				'icon': github,
				link: 'https://github.com/TommyRiquet'
			},
			{
				'name': 'VSCode',
				'icon': vscode,
				link: 'https://code.visualstudio.com/'
			},
			{
				'name': 'Postman',
				'icon': postman,
				link: 'https://www.postman.com/'
			}
		]
	}
]



const About = () => {
	return (
		<Box display='flex' flexDirection='column' justifyContent='space-between' minHeight='100vh' alignItems='center' pb={7}>

			<Typography variant='h3' sx={{ color: theme.palette.primary.main }} pt={8}>
				About <span style={{color: theme.palette.primary.dark}}>Me</span>
			</Typography>

			<Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' mt={8} width='100%'>
				{data.map((item, index) => (
					<Box key={index} display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb={8} width='100%'>
						<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>
							<span>{item.title}</span>
						</Typography>
						<Grid container mt={2} >
							{item.icons.map((icon, index) => (
								<Grid item key={index} md={6} lg={3}>
									<a href={icon.link} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
										<Box
											key={index}
											sx={{
												userSelect: 'none',
												alignSelf: 'center',
												width: '80%',
												height: 100,
												margin: 1,
												padding: 2,
												backgroundColor: 'rgba(255, 255, 255, 0.05)',
												transition: 'all 0.3s ease-in-out',
												'&:hover': {
													transform: 'scale(1.1)'
												}
											}}>
											<img src={icon.icon} alt={icon.name} width='100%' height='100%' />
										</Box>
									</a>
								</Grid>
							))}
						</Grid>
					</Box>
				))}
			</Box>

			<Typography variant='h4' sx={{ color: theme.palette.primary.main }} mb={8}>
				Days I <span style={{color: theme.palette.primary.dark}}>Code</span>
			</Typography>
			<Box maxWidth='80%'>
				<GitHubCalendar
					username='TommyRiquet'
					blockSize={15}
					blockMargin={5}
					color={theme.palette.primary.dark}
					fontSize={16}
				/>
			</Box>

		</Box>
	)
}

export default About
