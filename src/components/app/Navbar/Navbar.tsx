import { Dispatch, SetStateAction } from 'react'

import { Box } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'

import NavbarLink from './NavbarLink'

type NavbarProps = {
	setView: Dispatch<SetStateAction<string>>
  };


const Navbar = ( { setView }: NavbarProps ) => {
	return (
		<Box display='flex' flexDirection='row' justifyContent='end' alignItems='center' height={50} pt={2}>
			<Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
				<NavbarLink icon={<HomeOutlinedIcon/>} text='Home' onClick={() => setView('home')}/>
				<NavbarLink icon={<AccountCircleOutlinedIcon/>} text='About' onClick={() => setView('about')}/>
				<NavbarLink icon={<BusinessCenterOutlinedIcon/>} text='Portfolio' onClick={() => setView('portfolio')}/>
				<NavbarLink icon={<DescriptionOutlinedIcon/>} text='Resume' onClick={() => setView('resume')}/>
			</Box>
		</Box>
	)
}

export default Navbar
