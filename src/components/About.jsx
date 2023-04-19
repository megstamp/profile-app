import { useState } from "react";
import { Container, Row, Col, Button, } from "react-bootstrap";

export default function About() {

const [imgUrl,setImgUrl] = useState("https://picsum.photos/300/300");


    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img 
                        src={imgUrl}
                        className="rounded-circle"
                        alt="Profile"
                        />
                        <Button onClick={() => setImgUrl("https://picsum.photos/200/300")}>Change
                         Image</Button>
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