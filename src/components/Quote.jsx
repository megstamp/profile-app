import { Container, Row, Col } from "react-bootstrap"

export default function Quote() {

    return (
        <section>
            <Container className="quote-container bg-info">
                <Row className="text-center">
                    <Col>
                    <p><q>Mean People Suck.</q></p> - me
                    </Col>
                </Row>
             </Container>
        </section>
    )
}