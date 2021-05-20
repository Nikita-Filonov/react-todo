import React, {useState} from "react";
import {Alert, Col, Container, Form, ListGroup, Row} from 'react-bootstrap';
import {eventsData} from "../utils/data";
import {Event} from "../components/items/Event";
import {EventForm} from "../components/blocks/EventForm";

export const Main = () => {
    const [events, setEvents] = useState(eventsData)
    const [title, setTitle] = useState('')

    const createEvent = () => {
        let eventId = Math.max(...events.map(event => event.id), 1);
        setEvents([...events, {id: ++eventId, title: title.trim()}])
        setTitle('')
    }

    const deleteEvent = (eventId) => {
        setEvents([...events.filter(event => event.id !== eventId)])
    }

    const updateEvent = (eventId, key, value) => {
        setEvents([...events.map(event =>
            event.id === eventId
                ? {...event, [key]: value}
                : event
        )])
        setTitle('')
    }

    return (
        <Container className={'mt-5'}>
            <Row>
                <Col xs={12} md={7}>
                    <ListGroup as="ul">
                        <Form.Control
                            type="text"
                            className={'mb-3'}
                            placeholder="Search for events"
                        />
                        <Alert variant={'secondary'}>
                            {events.length === 0
                                ? 'There are no items.'
                                : `You have ${events.length} things to do`
                            }
                        </Alert>
                        {events.map(event => (
                            <Event
                                key={event.id}
                                item={event}
                                updateEvent={updateEvent}
                                deleteEvent={deleteEvent}
                            />
                        ))}
                    </ListGroup>
                </Col>
                <Col xs={6} md={5}>
                    <EventForm
                        title={title}
                        setTitle={setTitle}
                        createEvent={createEvent}
                    />
                </Col>
            </Row>
        </Container>
    )
}
