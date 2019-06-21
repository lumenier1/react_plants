import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlantItem extends Component {

   render() {
      const { id, title, description, tree, indoor, img } = this.props.plant;
      let type = '';
      switch (true) {
        case tree:
          type = 'Деревья';
          break;
        case indoor:
          type = 'Комнатные';
          break;
        default:
          type = 'Другое';
      }

      return (
         <tr>
           <th scope="row">{ id }</th>
           <td>{ title }</td>
           <td>{ description }</td>
           <td>{ type }</td>
           <td>
            <img src={img} height="100" />
           </td>
           <td>
            <button type="button" className="btn btn-outline-primary">Сохранить</button>
           </td>
         </tr>
      )
   }
}

// PropTypes
PlantItem.propTypes = {
   plant: PropTypes.object.isRequired
}

export default PlantItem;