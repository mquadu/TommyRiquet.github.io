import { Box, Typography } from '@mui/material'


import { TypingText } from 'components/common/'


import theme from '../../theme'

const Home = () => {
	return (
		<>
			<Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' height='93vh'>
				<Box display='flex' height='100%' flexDirection='column' justifyContent='center' alignItems='center' sx={{userSelect: 'none'}}>
					<Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
						Hello! My name is
					</Typography>
					<Typography variant='h1' sx={{ color: theme.palette.primary.main }}>
						Tommy Riquet
					</Typography>
					<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>
						<TypingText/>
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default Home
