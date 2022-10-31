import styled from '@emotion/styled'

import {  Card, ListGroup } from 'react-bootstrap';

export const ListCart = styled(ListGroup)`
flex-direction: row;
flex-wrap: wrap;

`
export const ListItem = styled(Card)`
    flex-basis: calc(100% / 3);
`