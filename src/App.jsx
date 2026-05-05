import { useState } from 'react'
import './app.css'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import {Footer} from './components/Footer'

function App() {
	return (
		<div className="appShell">
			<Header />
			<main>
				<Hero />
				<br />
				<Skills />
				<br />
				<Projects />
				<br />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App
