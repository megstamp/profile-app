import { Container, Row, Col, } from "react-bootstrap";

export default function About() {

    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src="https://picsum.photos/200/300"
                        className="rounded-circle"
                        alt="Profile"/>
                    </Col>

                    <Col>
                        <h1 className="mt-3">Meghann Stamper</h1>
                        <p>paragraph</p>
                    </Col>
                </Row>
            </Container>  




        </main>
        )
    }