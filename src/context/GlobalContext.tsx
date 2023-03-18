import React from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'

import theme from 'theme'

interface GlobalContextInterface {
    isMobile: boolean
}

const GlobalContext = React.createContext<GlobalContextInterface>(null!)

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const value = { isMobile }

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
	return React.useContext(GlobalContext)
}
