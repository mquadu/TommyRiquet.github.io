import { Box, Typography, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

import MyResume from 'static/docs/TommyRiquet-Resume.pdf'

import theme from '../../theme'

const Resume = () => {
	return (
		<>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minHeight='89vh'>
				<Typography variant='h3' sx={{ color: theme.palette.primary.main }} pt={8}>
					Resume
				</Typography>
				<Button
					variant='contained'
					sx={{
						mt: 2,
						backgroundColor: theme.palette.primary.dark,
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							backgroundColor: theme.palette.primary.light,
							transform: 'scale(1.05)'
						}
					}}
				>
					<a href={MyResume} rel='noreferrer' target='_blank' style={{textDecoration: 'none'}}>
						<DownloadIcon sx={{color: 'white'}}/>
					</a>
				</Button>
			</Box>
		</>
	)
}

export default Resume
