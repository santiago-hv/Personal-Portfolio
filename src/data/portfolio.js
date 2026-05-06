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
		title: "Fintech Dashboard",
		description:
			"Analytics dashboard for payments, metrics, and fast reading of key indicators.",
		tags: ["React", "Charts", "Node.js", "PostgreSQL"],
	},
	{
		title: "E-commerce Platform",
		description:
			"Complete storefront with catalog, cart, and a visual flow prepared for checkout.",
		tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
	},
	{
		title: "Portfolio CMS",
		description:
			"Content system for publishing projects and keeping a portfolio alive.",
		tags: ["TypeScript", "GraphQL", "Prisma", "Vercel"],
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
