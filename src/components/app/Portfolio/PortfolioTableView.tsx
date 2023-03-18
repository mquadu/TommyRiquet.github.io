import { FC } from 'react'

import { Typography, Table, TableHead, TableBody, TableRow, TableCell, TableFooter } from '@mui/material'

import { PortfolioInformationI } from './Portfolio'

interface PortfolioCardViewI {
	PortfolioInformations: PortfolioInformationI[]
}

const PortfolioTableView: FC<PortfolioCardViewI> = ({PortfolioInformations}) => {

	return (
		<>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Title</Typography>
						</TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Theme</Typography>
						</TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Validated Time</Typography>
						</TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Real Time</Typography>
						</TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Proof</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{PortfolioInformations.map((portfolioInformation, index) => {
						return (
							<TableRow key={index}>
								<TableCell>
									<Typography sx={{ color: theme => theme.palette.primary.main }}>
										{portfolioInformation.title}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography sx={{ color: theme => theme.palette.primary.main }}>
										{portfolioInformation.theme}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography sx={{ color: theme => theme.palette.primary.main }}>
										{portfolioInformation.validatedTime}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography sx={{ color: theme => theme.palette.primary.main }}>
										{portfolioInformation.realTime}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography sx={{ color: theme => theme.palette.primary.main }}>
										{portfolioInformation.proof}
									</Typography>
								</TableCell>
							</TableRow>
						)}
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>Total</Typography>
						</TableCell>
						<TableCell> </TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>
								{
									PortfolioInformations.reduce((accumulator, currentValue) => {
										return accumulator + currentValue.validatedTime
									}, 0)
								}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography sx={{ color: theme => theme.palette.primary.main }}>
								{
									PortfolioInformations.reduce((accumulator, currentValue) => {
										if(typeof(currentValue.realTime) === 'number')
											return accumulator + currentValue.realTime
										return accumulator + parseInt(currentValue.realTime)
									}, 0)
								}
							</Typography>
						</TableCell>
						<TableCell> </TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	)
}

export default PortfolioTableView
