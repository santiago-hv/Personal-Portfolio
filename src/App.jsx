// Using automatic JSX runtime — no explicit React import required
import './app.css'
import { Header, Hero, Skills, Projects, Contact, Footer } from './components'

function App() {
	return (
		<div className="appShell">
			<Header />
			<main>
				<Hero />
				<br />
				<Skills />
				<br />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App
