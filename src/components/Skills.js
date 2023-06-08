import { Form } from "react-bootstrap";
import{Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className = "skill-bx ">
                        <h3>
                            Skills
                            <p>---------------------------------------------</p>
                        </h3>
                        <div className="skills">
       
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap, Material-UI,
              jQuery
            </span>
            <br></br>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              PHP, NodeJS, .NET, Access, SQL, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>Java, PHP, Python, C++, JavaScript</span>
          </li>
        </ol>
      </div>
      
                        <Carousel responsive ={responsive} infinite={true} className="skill-slider">

                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>

                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Software Development</h5>
                            </div>
                            
                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>UX/UI Design</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter3} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>

                            

                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Adaptability</h5>
                            </div>

                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Team Player</h5>
                            </div>

                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Communication</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter1} alt="Image" />
                                <h5>Project Manager</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}