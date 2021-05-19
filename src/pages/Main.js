import React, {useState} from "react";
import {Button, Col, Container, Form, ListGroup, Row} from 'react-bootstrap';
import {eventsData} from "../utils/data";
import {Event} from "../components/items/Event";

export const Main = () => {
    const [events, setEvents] = useState(eventsData)
    const [title, setTitle] = useState('')

    const createEvent = () => {
        let eventId = Math.max(...events.map(event => event.id), 1);
        setEvents([...events, {id: ++eventId, title: title}])
        setTitle('')
    }

    const deleteEvent = () => {

    }

    const updateEvent = () => {
    }


    return (
        <div className={'mt-5'}>
            <Container>
                <Row>
                    <Col xs={12} md={7}>
                        <ListGroup as="ul">
                            {events.map(event => (
                                <Event
                                    key={event.id}
                                    item={event}
                                />
                            ))}
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={5}>
                        <Form.Group>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                type="text"
                                placeholder="I need to..."
                            />
                        </Form.Group>
                        <Button variant="primary"
                                disabled={title.length === 0}
                                onClick={createEvent}>
                            Create Event
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
