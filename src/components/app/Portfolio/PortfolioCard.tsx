import { FC, useState, useEffect, useRef } from 'react'

import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { PortfolioInformationI } from './Portfolio'

import { useAppContext } from 'context/AppContext'


interface PortfolioCardFrontI {
	title: string
	description: string
	link?: string | null
	isRotated: boolean
	setIsRotated: (value: boolean) => void
}

interface PortfolioCardBackI {
	title: string
	theme: string
	validatedTime: number
	realTime: number | string
	description: string
	width: number | undefined
	proof?: string[]
	isRotated: boolean
	setIsRotated: (value: boolean) => void
}


const usePortfolioCard = () => {
	const [ isRotated, setIsRotated ] = useState(() => false)
	const [ prevState, setPrevState ] = useState(false)
	const { nbrRotated, setNbrRotated } = useAppContext()

	useEffect(() => {
		if (isRotated) {
			setNbrRotated(nbrRotated + 1)
			setPrevState(true)
		}else if (prevState === true && isRotated === false) {
			setNbrRotated(nbrRotated - 1)
		}
	}, [isRotated])

	return {
		isRotated,
		setIsRotated
	}
}


const PortfolioCard : FC<PortfolioInformationI> = ({ title, theme, validatedTime, realTime, description, link, proof }) => {
	const cardRef = useRef<HTMLDivElement>(null)
	const { isRotated, setIsRotated } = usePortfolioCard()


	return (
		<Box ref={cardRef} display='inline-flex' width='100%' sx={{ userSelect: 'none' }}>
			<PortfolioCardFront isRotated={isRotated} setIsRotated={setIsRotated} title={title} description={description} link={link} />
			<PortfolioCardBack width={cardRef.current?.clientWidth} isRotated={isRotated} setIsRotated={setIsRotated} title={title} theme={theme} validatedTime={validatedTime} realTime={realTime} description={description} proof={proof}/>
		</Box>
	)
}


const PortfolioCardFront: FC<PortfolioCardFrontI> = ({ isRotated, setIsRotated, title, description, link}) => {

	return (
		<Card
			sx={{
				width: '100%',
				height: '550px',
				backgroundColor: 'rgba(255, 255, 255, 0.05)',
				borderRadius: '10px',
				position: 'relative',
				cursor: 'pointer',
				backfaceVisibility: 'hidden',
				transformStyle: 'preserve-3d',
				transition: 'all 0.3s ease-in-out',
				transform: isRotated ? 'rotateY(-180deg)' : 'rotateY(0deg)',
				'&:hover': {
					boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
				}
			}}
			onClick={() => {
				setIsRotated(true)
			}}
		>
			<CardMedia
				component='img'
				height='280'
				image={link ? link : undefined}
				sx={{
					objectFit: link?.substring(link.length - 3) === 'png' ? 'contain' : 'cover',
					objectPosition: 'center',
					height: '280px'
				}}
				alt='random'
			/>
			<CardContent>
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='spance-between' height='100%' textAlign='center' m={3}>
					<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
						<Typography gutterBottom variant='h5' color={theme => theme.palette.primary.main}>
							{title}
						</Typography>
						<Typography variant='body2' color={theme => theme.palette.primary.main}>
							{description}
						</Typography>
					</Box>
					<Box position='absolute' bottom='10px' right='20px' display='flex' alignItems='center'>
						<Typography variant='body2' color={theme => theme.palette.primary.main} pr={1}>
							Click to see more
						</Typography>
						<ArrowForwardIosIcon sx={{color: theme => theme.palette.primary.main}} />
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}


const PortfolioCardBack: FC<PortfolioCardBackI> = ({isRotated, setIsRotated, width, title, theme, validatedTime, realTime, description}) => {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '550px',
				backgroundColor: 'rgba(255, 255, 255, 0.05)',
				borderRadius: '10px',
				position: 'absolute',
				width: width ? width : 'calc(33% - 16px)',
				cursor: 'pointer',
				backfaceVisibility: 'hidden',
				transformStyle: 'preserve-3d',
				transition: 'all 0.3s ease-in-out',
				transform: !isRotated ? 'rotateY(-180deg)' : 'rotateY(0deg)',
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
			}}
			onMouseLeave={() => {
				setIsRotated(false)
			}}
			onClick={() => {
				setIsRotated(false)
			}}
		>
			<CardContent>
				<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='100%' pb={10} m={3}>
					<Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
						<Typography variant='h5' color={theme => theme.palette.primary.main}>
							{title}
						</Typography>
						<Typography variant='body2' color={theme => theme.palette.primary.dark}>
							<span style={{color: 'white'}}>Theme :</span> {theme}
						</Typography>
						<Typography variant='body2' color={theme => theme.palette.primary.dark}>
							<span style={{color: 'white'}}>Validated time :</span> {validatedTime}
						</Typography>
						<Typography variant='body2' color={theme => theme.palette.primary.dark}>
							<span style={{color: 'white'}}>Real time :</span> {realTime}
						</Typography>
						<Typography variant='body2'>
							<span style={{color: 'white'}}>Description :</span> {description}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}


export default PortfolioCard
