import styled from '@emotion/styled';

import { Card, ListGroup } from 'react-bootstrap';

export const ListCart = styled(ListGroup)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px 20px;
  gap: 20px;
`;
export const ListItem = styled(Card)`
  flex-basis: calc((100% - 40px) / 3);
`;
