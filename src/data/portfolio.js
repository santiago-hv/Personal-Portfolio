import frontEndIcon from "../assets/svg/monitor-svgrepo-com.svg";
import backEndIcon from "../assets/svg/servers-svgrepo-com.svg";
import toolsIcon from "../assets/svg/terminal-svgrepo-com.svg";
import reactIcon from "../assets/svg/react.svg";
import nodeIcon from "../assets/svg/nodedotjs.svg";
import cssIcon from "../assets/svg/css.svg";
import jsIcon from "../assets/svg/javascript.svg";
import gitIcon from "../assets/svg/git.svg";
import pythonIcon from "../assets/svg/python.svg";
import laravelIcon from "../assets/svg/laravel.svg";
import htmlIcon from "../assets/svg/html5.svg";
import linuxIcon from "../assets/svg/linux.svg";
import phpIcon from "../assets/svg/php.svg";
import javaIcon from "../assets/svg/java-svgrepo-com.svg";
import viteIcon from "../assets/svg/vite.svg";
import githubIcon from "../assets/svg/github.svg";
import sqlServerIcon from "../assets/svg/Microsoft SQL Server.svg";
import postsgreIcon from "../assets/svg/postgresql.svg";
import expressIcon from "../assets/svg/express.svg";
import dockerIcon from "../assets/svg/docker.svg";
import tailwindIcon from "../assets/svg/tailwind-css-svgrepo-com.svg";
import pokedexPreview from "../assets/pokedex-preview.svg";
import pokeapi from "../assets/projects/Screenshot_3.png";
import gameshop from "../assets/projects/Screenshot_5.png";


export const techStack = [
	"React",
	"JavaScript",
	"Node.js",
	"CSS",
	"Vite",
	"Git",
	"Python",
	"Java",
	"Laravel",
	"SQL Server",
	"PostgreSQL",	
	"PHP",
	"Docker",
	"Tailwind CSS"
];

export const skills = [
	{
		title: "Frontend",
		icon: frontEndIcon,
		description:
			"Responsive interfaces focused on experience, accessibility, and visual micro-details.",
		tags: ["React", "JavaScript", "CSS", "HTML", "Vite", "Tailwind CSS"],
		icons: [reactIcon, jsIcon, cssIcon, htmlIcon, viteIcon, tailwindIcon],
	},
	{
		title: "Backend",
		icon: backEndIcon,
		description:
			"Clear APIs, clean data structure, and logic designed to scale without losing order.",
		tags: ["Node.js", "Express", "Java", "Python", "Laravel", "Php", "SQL Server", "PostgreSQL"],
		icons: [nodeIcon, expressIcon, javaIcon, pythonIcon, laravelIcon, phpIcon, sqlServerIcon, postsgreIcon],
	},
	{
		title: "Tools",
		icon: toolsIcon,
		description:
			"Project organization, version control, and deployments focused on shipping quickly.",
		tags: ["Git", "GitHub", "Linux", "Docker"],
		icons: [gitIcon, githubIcon, linuxIcon, dockerIcon],
	},
];

export const projects = [
	{
		title: "PokéDex",
		description:
			"Pokémon search app connected to PokéAPI with a visual card for stats, type, abilities, and general details.",
		tags: ["JavaScript", "HTML", "CSS", "PokéAPI"],
		image: pokeapi,
		demoUrl: "https://santiago-hv.github.io/Poke-Dex/",
		repoUrl: "https://github.com/santiago-hv/Poke-Dex",
	},
	{
		title: "Game shop",
		description:
			"Platform for selling video games with a modern UI and seamless checkout experience.",
		tags: ["Python", "QtDesigner"],
		image: gameshop,
		repoUrl: "https://github.com/santiago-hv/TiendaJuegos",
	},
];

export const contactLinks = [
	{
		label: "Email",
		value: "santiagoh0802@gmail.com",
		href: "mailto:santiagoh0802@gmail.com",
	},
	{
		label: "GitHub",
		value: "santiago-hv",
		href: "https://github.com/santiago-hv",
	},
	{
		label: "LinkedIn",
		value: "Santiago Huapalla Villegas",
		href: "https://www.linkedin.com/in/santiago-huapalla-villegas/",
	},
];
