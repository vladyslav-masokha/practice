import { useTitleLogic } from '../../logics/titleLogic.tsx'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './AboutPage.module.scss'
import {useFetchDataAbout} from "../../logics/useFetchDataAbout.ts";

const AboutPage = () => {
	useTitleLogic({ namePage: 'Про Нас', id: null })

	const aboutData = '/about.json';
	const data = useFetchDataAbout(aboutData)
	console.log(data)

	return (
		<>
			<Header />

			<div className={styles.about}>
				<div className='wrapper'>
					<h2>Про Нас</h2>

					<div className={styles.aboutBody}>
						{/*{data.aboutText.map((item: { paragraph1: string; paragraph2: string; }, index: number) => (*/}
						{/*	<div key={index}>*/}
						{/*		<p>{item.paragraph1}</p>*/}
						{/*		<p>{item.paragraph2}</p>*/}
						{/*	</div>*/}
						{/*))}*/}
					</div>

					<div className={styles.aboutLocation}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.66492086928!2d30.4734714754331!3d50.42871438893004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec0ea74afa7%3A0x638e8cfbdbe5fddc!2z0JTQtdGA0LbQsNCy0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIg0YLQtdC70LXQutC-0LzRg9C90ZbQutCw0YbRltC5!5e0!3m2!1suk!2sua!4v1710791458197!5m2!1suk!2sua'
							height='400'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { AboutPage }
