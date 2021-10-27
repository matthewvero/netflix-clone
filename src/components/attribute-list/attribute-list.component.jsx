import React from 'react'
import { AttributeListContainer, ListItem, ListTitle } from './attribute-list.styles'

const AttributeList = ({title, items, separator, small}) => {
      if(!items) return null
      return (
            <AttributeListContainer separator={separator} className={small ? 'small' : null}>
                  {
                        title &&
                        <ListTitle >
                              {title}:{" "}
                        </ListTitle> 
                  }

                  {items?.map((el, key) => (
                        <ListItem key={key}>{el.name}</ListItem>
                  ))}
            </AttributeListContainer>
      )
}

export default AttributeList
