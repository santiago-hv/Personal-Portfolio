// Using automatic JSX runtime — no explicit React import required
import './app.css'
import { GridBackdrop, Header, Hero, Skills, Projects, Contact, Footer } from './components'

function App() {
	return (
		<div className="appShell">
			<GridBackdrop />
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
