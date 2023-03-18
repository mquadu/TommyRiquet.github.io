import { FC } from 'react'

import { Grid } from '@mui/material'

import PortfolioCard from './PortfolioCard'
import { PortfolioInformationI } from './Portfolio'

interface PortfolioCardViewI {
	PortfolioInformations: PortfolioInformationI[]
}

const PortfolioCardView: FC<PortfolioCardViewI> = ({PortfolioInformations}) => {

	return (
		<>
			<Grid container spacing={5}>
				{PortfolioInformations.map((portfolioInformation, index) => {
					return (
						<Grid item sm={12} lg={6} xl={4} key={index}>
							<PortfolioCard
								title={portfolioInformation.title}
								theme={portfolioInformation.theme}
								validatedTime={portfolioInformation.validatedTime}
								realTime={portfolioInformation.realTime}
								description={portfolioInformation.description}
								link={portfolioInformation.link}
								proof={portfolioInformation.proof}
							/>
						</Grid>
					)}
				)}
			</Grid>
		</>
	)
}

export default PortfolioCardView
