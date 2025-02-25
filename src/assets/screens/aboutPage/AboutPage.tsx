import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './AboutPage.module.scss'
import {useFetchData} from "../../globalLogics/useFetchData.ts";
import { IAbout } from "../../interfaces/IAbout.ts";
import {AboutLocation} from "./components/AboutLocation.tsx";

const AboutPage = () => {
	useTitleLogic({ namePage: 'Про Нас', id: null })

	const aboutData = '/about.json';
	const data: IAbout[] = useFetchData(aboutData)

	return (
		<>
			<Header />

			<div className={styles.about}>
				<div className='wrapper'>
					<h2>Про Нас</h2>

					<div className={styles.aboutBody}>
						{data.map((item: { paragraph1: string; paragraph2: string; }, index: number) => (
							<div key={index}>
								<p>{item.paragraph1}</p>
								<p>{item.paragraph2}</p>
							</div>
						))}
					</div>

					<AboutLocation />
				</div>
			</div>

			<Footer />
		</>
	)
}

export { AboutPage }
