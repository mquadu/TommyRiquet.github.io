import { Box, Typography } from '@mui/material'

import theme from 'theme'


interface NavbarLinkProps {
	icon: JSX.Element
	text: string
	onClick: () => void
}


const NavbarLink = ( { icon, text, onClick }: NavbarLinkProps ) => {

	return (
		<Box
			onClick={onClick}
			marginX={2}
			paddingX={1}
			paddingY={1}
			color={theme.palette.primary.main}
			display='inline-block'
			position='relative'
			sx={{
				cursor: 'pointer',
				transition: 'transform 0.25s ease-out',
				'&:hover': {
					transform: 'scale(1.05)'
				},
				'&::after': {
					content: '""',
					position: 'absolute',
					width: '100%',
					transform: 'scaleX(0)',
					height: '2px',
					bottom: 0,
					left: 0,
					backgroundColor: theme.palette.primary.dark,
					transformOrigin: 'bottom right',
					transition: 'transform 0.25s ease-out'
				},
				'&:hover::after': {
					transform: 'scaleX(1)',
					transformOrigin: 'bottom left'
				}
			}}
		>
			<Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
				{icon}
				<Typography variant='h6' sx={{ color: theme.palette.primary.main, ml: 1, userSelect: 'none' }}>
					{text}
				</Typography>
			</Box>
		</Box>
	)
}

export default NavbarLink
