import { Container, Row, Col } from "react-bootstrap";

export default function() {

    const currentYear = new Date().getFullYear();
    const gitHubUrl = "https://github.com/megstamp/profile-app"

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