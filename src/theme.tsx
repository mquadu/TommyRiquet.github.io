import { createTheme } from '@mui/material/styles'


const theme = createTheme({
	palette: {
		primary: {
			light: '#00406c',
			main: '#FFFDFA',
			dark: '#0a112b',
			contrastText: '#fff'
		},
		secondary: {
			light: '#142545',
			main: '#142545',
			dark: '#223e81'
		},
		background: {
			default: '#1C1C1C'
		}
	}
})

export default theme
