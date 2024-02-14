import visualImg from "../assets/visual-digit.png";
import reacLayer from "../assets/reacLayer.png";
import farmAttic from "../assets/farm-attic.png";

function Projects(props) {
    return (
        <div class="portfolio-item">
            <div class="portfolio-item-inner">
                <div class="portfolio-img">
                    <img src={props.image} alt="" width="330px" height="384px" />
                </div>
                <div class="portfolio-info">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
function Project() {
    return (
        <section class="portfolio-section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>My <span>Work</span></h2>
                    </div>
                </div>
                <div class="row">
                    <Projects
                        title="visual Digit Classifier"
                        image={visualImg}
                        description="It a web application built to recognize handwritten digit using deep 
                    learning model trained on the MNIST dataset to recognize and classify handwritten digits"/>
                    <Projects
                        title="ReacLayer"
                        image={reacLayer}
                        description="Developed a web application that captures the user’s emotion and plays music accordingly." />
                    <Projects
                       title="Farm Attic"
                       image={farmAttic}
                       description="Designed and implemented an e‐commerce website to help farmers to sell their goods directly to consumers, cutting out the mid‐
                       dleman and ensuring fair prices for both parties."/>
                </div>
            </div>
        </section>
    )
}

export default Project;