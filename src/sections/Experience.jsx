
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

function TimeLine(props) {
    return (
        <div className="timeline-item">
            <h5><FaRegCalendarCheck style={{ 'margin-right': '30px', color: '#F39C12' }} />{props.year}</h5>
            <h6>{props.college}</h6>
            <h4>{props.degree}</h4>
            <h4>{props.percentage}</h4>
        </div>
    )
}

function Work(props) {
    return (
        <div class="timeline-degree">
            <FaSquare className="square" />
            <h5>{props.company}</h5>
            <h6>{props.designation}</h6>
            <h6>{props.duration}</h6>
        </div>
    )
}
function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Education / <span> Experience</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="experience-content">
                        <div className="row">
                            <div className="education-year">
                                <div className="row">
                                    <TimeLine college="St. Joseph's College of Engineering" year='2018-2022' degree='B.Tech, Information Technology' percentage='8.47 / 10' />
                                    <TimeLine college="Velammal Matric Hr Sec School" year='2017-2018' degree="Computer Science" percentage='93.1 / 100' />
                                    <TimeLine college="Velammal Matric Hr Sec School" year='2015-2016' degree="StateBoard" percentage='94.6 / 100' />
                                </div>
                            </div>

                            <div class="education-degree">
                                <div class="row">
                                    <Work company="CogentSoft Systems" designation="Software Developer" duration="Oct, 2022 - Dec, 2023" />
                                    <Work company="Zoho Corp." designation="Project Trainee" duration="Mar, 2022 - Aug, 2022" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;