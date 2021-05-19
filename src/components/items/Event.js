import React from "react";
import {Form, ListGroup} from "react-bootstrap";
import {Pencil, Trash} from 'react-bootstrap-icons';

export const Event = ({item, updateEvent, deleteEvent}) =>
    <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
        <Form.Check
            type="checkbox"
            onChange={() => updateEvent(item.id, 'done', !item.done)}
            checked={item.done}
            label={item.title}
        />
        <Pencil className="right ml-auto"/>
        <Trash onClick={() => deleteEvent(item.id)} className={'ml-3'}/>
    </ListGroup.Item>


