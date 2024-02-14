import "../App.css";

function Skill(props) {
    return (
        <div className="skill-item">
            <h3>{props.skill}</h3>
            <div className="progress">
                <div className="progress-in" style={{ width: props.level }}></div>
                <div className="skill-rate">{props.level}</div>
            </div>
        </div>
    )
}

function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>About<span> Me</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content">
                        <div className="row">
                            <div className="about-text">
                                <h3>Nilavan Sritharan</h3>
                                <p>
                                    I am a highly motivated individual with a passion for technology and software development. I completed my Bachelor of Technology (B.Tech) degree in Information Technology with a remarkable CGPA of 8.47 out of 10,
                                    showcasing my dedication and academic excellence in the field. With over a year of professional experience as a software developer, I have honed my skills in various programming languages and technologies, including but not limited to NodeJs, RabbitMQ, Redis, PostgreSQL, Jenkins, Kibana, CockroachDB.
                                    Driven by a constant desire for growth and learning, I am now seeking the perfect opportunity in the field of software development where I can leverage my expertise, creativity, and problem-solving abilities to make meaningful contributions to innovative projects and initiatives. I am eager to collaborate with like-minded professionals and contribute to the advancement of technology in a dynamic and challenging environment.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-skill">
                                <div className="row">
                                    <Skill skill="JavaScript" level="80%" />
                                    <Skill skill="Java" level="70%" />
                                    <Skill skill="Python" level="70%" />
                                    <Skill skill="ReactJS" level="60%" />
                                    <Skill skill="NodeJS" level="70%" />
                                </div>
                            </div>
                            <div className="extra-skill">
                                <div className="row">
                                    <Skill skill="PostgreSQL" level="60%" />
                                    <Skill skill="RabbitMQ" level="50%" />
                                    <Skill skill="DSA" level="70%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;