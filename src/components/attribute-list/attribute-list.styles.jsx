import styled from 'styled-components';

export const ListItem = styled.span`
      color: white;
      font-size: 1rem;
      `
      export const ListTitle = styled.span`
            color: #888;
      `
export const AttributeListContainer = styled.div`
      display: inline-block;
      margin-bottom: 0px;
      text-align: left;
      & ${ListItem}:not(:last-of-type):after {
            content: '${props => props.separator ? `${props.separator} ` : ', '}';
      }
      &.small ${ListItem},  &.small ${ListTitle}{
            font-size: 0.8rem;
      }
`;
