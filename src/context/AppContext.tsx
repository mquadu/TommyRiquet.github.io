import { createContext, useContext, useState, useEffect } from 'react'

import { PortfolioInformations } from 'components/app/Portfolio/Portfolio'
export interface AppContextType {
	isLoading: boolean
	nbrRotated: number
	setNbrRotated: (value: number) => void
}

const AppContext = createContext<AppContextType>(null!)

export function AppContextProvider ({ children }: { children: React.ReactNode }) {

	const [ nbrRotated, setNbrRotated ] = useState(0)
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		if (nbrRotated === PortfolioInformations.length) {
			console.log('Well done ! You broke it :/')
		}
	}, [nbrRotated])

	useEffect(() => {
		if (isLoading)
			setTimeout(() => {
				setIsLoading(false)
			}, 500)
	}, [])

	const value: AppContextType = {
		isLoading,
		nbrRotated,
		setNbrRotated
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}

export function useAppContext() {
	return useContext(AppContext)
}
