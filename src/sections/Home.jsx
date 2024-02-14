import profile from "../assets/nilavannn.jpeg";
import resume from "../assets/nilavan_resume.pdf";
function Home() {
    return (
        <section className="home-section" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="home-text">
                        <p>Hello,</p>
                        <h1>I'm <span>Nilavan</span></h1>
                        <h3>Software Developer</h3>
                        <a href={resume} target="_blank" className="btn btn-1">View Resume</a>
                    </div>
                    <div className="home-img">
                        <img src={profile} alt="profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;