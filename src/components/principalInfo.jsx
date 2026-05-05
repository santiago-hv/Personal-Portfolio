
export function PrincipalInfo() {
    return (
			<article className="infoBox">
				<article>
					<h2>Hi, I'm Santiago Villegas</h2>
					<p>
						I'm a software developer specializing in building exceptional
						digital experiences. Currently, I'm focused on building responsive
						web applications.
					</p>
                    <div className="buttonsInfo">
                        <div className="socialButtons">
                            <a href="https://github.com/santiago-hv">
                                <img className="icons" src="src\assets\github.svg"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/santiago-huapalla-villegas/">
                                <img className="icons" src="src\assets\icons8-linkedin.svg"></img>
                            </a>
                        </div>
                        <div className="principalButtons">
                            <button>Contact Me</button>
                            <button>View Projects</button>
                        </div>
                    </div>
				</article>
				<img className="personalImg" src="src\assets\20260415_155653.jpg" alt="Profile Picture" />
			</article>
		);
}