import React, { useEffect } from 'react'
import { useTitleLogicProps } from './props/useTitleLogicProps'

const useTitleLogic: React.FC<useTitleLogicProps> = ({ namePage, id }) => {
	useEffect(() => {
		document.title = `${namePage} - онлайн кінотеатр`
		return () => {
			document.title = 'NIGHTFLEX - онлайн кінотеатр'
		}
	}, [id, namePage])

	return null
}

export { useTitleLogic }
