import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
     return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">React Plants</Link>
          <div className="input-group ml-auto col-sm-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="plantFilterOptions">Фильтр</label>
            </div>
            <select className="custom-select" onChange={this.props.filterChange.bind(this)} id="plantFilterOptions" defaultValue="all">
              <option value="all">Все</option>
              <option value="indoor">Комнатные</option>
              <option value="tree">Деревья</option>
              <option value="another">Остальные</option>
              <option value="saved">Сохраненные</option>
            </select>
          </div>
        </nav>
     )
  }
}

export default Header;