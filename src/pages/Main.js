import React, {useCallback, useMemo, useState} from "react";
import {Alert, Col, Container, Dropdown, DropdownButton, Form, ListGroup, Row} from 'react-bootstrap';
import {eventsData} from "../utils/data";
import Event from "../components/items/Event";
import {EventForm} from "../components/blocks/EventForm";
import {applyFilter} from "../utils/Utils";

const Main = () => {
    const [events, setEvents] = useState(eventsData)
    const [title, setTitle] = useState('')
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

    const createEvent = useCallback(() => {
        let eventId = Math.max(...events.map(event => event.id), 1);
        setEvents([...events, {id: ++eventId, title: title.trim()}])
        setTitle('')
    }, [events, title])

    const deleteEvent = useCallback((eventId) => {
        setEvents([...events.filter(event => event.id !== eventId)])
    }, [events])

    const updateEvent = useCallback((eventId, key, value) => {
        setEvents([...events.map(event =>
            event.id === eventId
                ? {...event, [key]: value}
                : event
        )])
        setTitle('')
    }, [events])

    const handleEventsSearch = useMemo(() =>
            events
                .filter(event => applyFilter(filter, event))
                .filter(event => event.title.toLowerCase().includes(search.toLowerCase())),
        [events, filter, search]
    )

    return (
        <Container className={'mt-5'}>
            <Row>
                <Col xs={12} md={7}>
                    <ListGroup as="ul" className={'mb-5'}>
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
                        {handleEventsSearch.map(event => (
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

export default React.memo(Main)
