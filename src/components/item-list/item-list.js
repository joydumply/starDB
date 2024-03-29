import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items =  data.map(( item ) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
      key={id}
      onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.defaultProps = {
  onItemSelected: PropTypes.func, 
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList


// const { getAllPeople } = new SwapiService();

// export default withData(ItemList, getAllPeople);





// Замыкание

// const f = (a) => {
//   return (b) => {
//     console.log(a+b)
//   }
// }
// f(1)(2); // 3

// const f = () =>{ 
//   return ItemList //удалить еще export default
// }
// export default f();

