import React from "react";
import {ListGroup} from "react-bootstrap";

export const Event = ({item}) =>
    <ListGroup.Item as="li">
        {item.title}
    </ListGroup.Item>
