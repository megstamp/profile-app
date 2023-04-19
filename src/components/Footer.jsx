import { Container, Row, Col } from "react-bootstrap";

export default function() {

    const currentYear = new Date().getFullYear();
    const gitHubUrl = "http://github.com/megstamp/react-css-bootstrap-example"

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                    <p>&copy; {currentYear} My Name
                    <br />
                    <a href={gitHubUrl}
                        target="_blank"
                        rel="noreferrer">Code in Github</a></p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}