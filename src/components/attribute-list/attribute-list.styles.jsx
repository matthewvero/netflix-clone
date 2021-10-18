import styled from 'styled-components';

export const ListItem = styled.li`
      color: white;
      font-size: 1rem;
      display: inline;
`
export const ListTitle = styled.span`
      color: #888;
`
export const AttributeListContainer = styled.ul`
      display: inline-block;
      margin: 0;
      padding: 0;
      text-align: left;
      list-style-type: none;
      & ${ListItem}:not(:last-of-type):after {
            content: '${props => props.separator ? `${props.separator} ` : ', '}';
      }
      &.small ${ListItem},  &.small ${ListTitle}{
            font-size: 0.8rem;
      }
`;

