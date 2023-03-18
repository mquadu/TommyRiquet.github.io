import { Grid, Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import MailIcon from '@mui/icons-material/Mail'

import theme from 'theme'

const Footer = () => {
	return (
		<Grid container height={50} flexDirection='row' justifyContent='center' alignItems='center'>
			<Grid item md={4} textAlign='center'>
				<Typography sx={{ color: theme.palette.primary.main }}>
					Designed and Developed by Tommy Riquet
				</Typography>
			</Grid>
			<Grid item md={4} textAlign='center'>
				<Typography sx={{ color: theme.palette.primary.main }}>
					© Tommy Riquet 2023
				</Typography>
			</Grid>
			<Grid item md={4} textAlign='center'>
				<Box display='inline-flex'>
					<a href='https://github.com/TommyRiquet' rel='noreferrer' target='_blank'>
						<Box mx={1}
							sx={{
								transition: 'transform 0.3s',
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)'
								}
							}}
						>
							<GitHubIcon sx={{ color: theme.palette.primary.main }}/>
						</Box>
					</a>

					<a href='mailto:tommy.riquet@hotmail.com' rel='noreferrer' target='_blank'>
						<Box mx={1}
							sx={{
								transition: 'transform 0.3s',
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)'
								}
							}}
						>
							<MailIcon sx={{ color: theme.palette.primary.main }}/>
						</Box>
					</a>

					<a href='https://www.linkedin.com/in/tommy-riquet/' rel='noreferrer' target='_blank'>
						<Box mx={1}
							sx={{
								transition: 'transform 0.3s',
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)'
								}
							}}
						>
							<LinkedInIcon sx={{ color: theme.palette.primary.main }}/>
						</Box>
					</a>

					<Box mx={1}
						sx={{
							transition: 'transform 0.3s',
							cursor: 'pointer',
							'&:hover': {
								transform: 'scale(1.05)'
							}
						}}>
						<TwitterIcon sx={{ color: theme.palette.primary.main }}/>
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Footer
