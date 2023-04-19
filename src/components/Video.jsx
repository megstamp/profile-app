import { Container, Row, Col } from "react-bootstrap"

export default function Video() {

    return(
        <section>
            <Container className="bg-secondary">
                <Row>
                    <Col>
                    <h2> Video</h2>
                    <p> yay doggies</p>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/B1CPE6WWsAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}