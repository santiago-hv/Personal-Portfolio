import { useState } from 'react'
import './app.css'
import {Header} from './components/Header'
import { PrincipalInfo } from './components/principalInfo'
function App() {
	return (
		<div className="appShell">
			<Header />
			<main>
				<Hero />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App
