import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Developer", "Web Developer", "Web Designer", "UI/UX Designer", "Content-Creator", "Project Manager" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>

        
            <span className="tagline">Welcome to my Portfolio</span>

            <h1>{`Hi! I'm Cyril K.Thomas  `} <span className="wrap">{text}</span></h1>
            <p>Passionate and dedicated full-stack developer with expertise in Java, C++, Python, PHP, JavaScript, HTML, CSS, SQL, and Firebase. Skilled in creating dynamic web applications, crafting engaging user interfaces, and implementing back-end functionalities. Experienced in data management and real-time database integration. Eager to contribute, innovate, and make a meaningful impact in the ever-evolving tech landscape. Constantly seeking new ways to stay ahead of the curve and deliver seamless user experiences. Let's collaborate and build something amazing together, leveraging my proficiency in these languages and technologies. Together, we can create innovative software solutions that shape the future. Excited to embark on this journey with you!</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
          
             <img src={headerImg} alt="Header Img"/>
        
         
            </Col>
        </Row>
      </Container>
    </section>
  )

}