import React, {useState} from "react";
import {Alert, Col, Container, DropdownButton, Form, ListGroup, Row, Dropdown} from 'react-bootstrap';
import {eventsData} from "../utils/data";
import {Event} from "../components/items/Event";
import {EventForm} from "../components/blocks/EventForm";
import {applyFilter} from "../utils/Utils";

export const Main = () => {
    const [events, setEvents] = useState(eventsData)
    const [title, setTitle] = useState('')
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

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
                            value={search}
                            onChange={event => setSearch(event.target.value)}
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
                        {events
                            .filter(event => applyFilter(filter, event))
                            .filter(event => event.title.toLowerCase().includes(search.toLowerCase()))
                            .map(event => (
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
                    <DropdownButton title={filter} className={'mt-3'}>
                        <Dropdown.Item
                            active={filter === 'All'}
                            onClick={() => setFilter('All')}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item
                            active={filter === 'Done'}
                            onClick={() => setFilter('Done')}>
                            Done
                        </Dropdown.Item>
                        <Dropdown.Item
                            active={filter === 'In Progress'}
                            onClick={() => setFilter('In Progress')}>
                            In Progress
                        </Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
    )
}
