import {Container, Row, Col } from "react-bootstrap";

export default function Grid() {

    return(
        <section>
            <Container className=" grid-container">
                <Row>
                    <Col sm={12} md={4}>
                        <h2 className="text-center"> Why BC</h2>
                        <p>blahblah</p>
                    </Col>


                    <Col sm={12} md={4}>
                        <h2>exciting project</h2>
                        <p>blahblah</p>
                    </Col>


                    <Col>
                        <h2>ideal workplace</h2>
                        <p>blahblah</p>
                    </Col>


                </Row>
            </Container>
        </section>
    )

}