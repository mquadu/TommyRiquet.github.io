import { FC } from 'react'

import { Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'

import theme from '../../theme'

const TypedText = [
	'IT Student',
	'Developer',
	'Open Source Contributor'
]

const TypingText : FC = () => {
	return (
		<Typography variant='h4' sx={{ color: theme.palette.primary.main }}>
			<Typewriter
				options={{
					strings: TypedText,
					autoStart: true,
					loop: true,
					deleteSpeed: 50
				}}
			/>
		</Typography>
	)
}

export default TypingText
