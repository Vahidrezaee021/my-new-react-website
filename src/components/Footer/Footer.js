import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h2>رسالت پروگ شو</h2>
                        <p>پروگ شو با هدف تولید آموزش هایی ایجاد شده که حس شیرین یادگیری لدت بخش برنامه نویسی و طراحی وب رو تجربه کنید.</p>
                    </Col>
                    <Col style={{textAlign: 'left'}}>
                        <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer