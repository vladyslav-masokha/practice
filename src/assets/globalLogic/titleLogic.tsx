import { useEffect } from 'react'

interface useTitleLogicProps {
	namePage: string
	id: number | null
}

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
