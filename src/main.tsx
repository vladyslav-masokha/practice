import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './assets/screens/aboutPage/AboutPage.tsx'
import { FilmPage } from './assets/screens/filmPage/FilmPage.tsx'
import { HomePage } from './assets/screens/homePage/HomePage.tsx'
import { LoginPage } from './assets/screens/loginPage/LoginPage.tsx'
import { RegisterPage } from './assets/screens/registerPage/RegisterPage.tsx'
import { ResetPasswordPage } from './assets/screens/resetPasswordPage/ResetPasswordPage.tsx'
import { UserProfilePage } from './assets/screens/userProfilePage/UserProfilePage.tsx'
import './firebase.ts'
import './index.scss'
import {EditProfilePage} from "./assets/screens/editProfilePage/EditProfilePage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter future={{ v7_startTransition: true }}>
			<Routes>
				<Route path='/' Component={HomePage} />
				<Route path='/profile' Component={UserProfilePage} />
				<Route path='/edit-profile' Component={EditProfilePage} />
				<Route path='/about' Component={AboutPage} />
				<Route path='/login' Component={LoginPage} />
				<Route path='/register' Component={RegisterPage} />
				<Route path='/reset' Component={ResetPasswordPage} />
				<Route path='/:id' Component={FilmPage} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
