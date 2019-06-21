import React, { Component } from 'react';
import PlantItem from './PlantItem';
import PropTypes from 'prop-types';

class Plants extends Component {

   render() {
     
     const filterOption = this.props.filterOption;
     
      return (
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Описание</th>
              <th scope="col">Тип</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.plants.filter(plant => plant.tree && filterOption == 'tree' || plant.indoor && filterOption == 'indoor' || !plant.tree && !plant.indoor && filterOption == 'another' || filterOption == 'all' ).map((plant) => (
             <PlantItem key={plant.id} plant={plant} />
            ))}
            {this.props.saved.filter(savedItem => filterOption == 'saved').map((savedItem) => (
              <PlantItem key={savedItem.id} plant={savedItem} savePlant={this.props.savePlant} />
            ))}
          </tbody>
        </table>
      )
   }
}

// PropTypes
Plants.propTypes = {
   plants: PropTypes.array.isRequired
}

export default Plants;