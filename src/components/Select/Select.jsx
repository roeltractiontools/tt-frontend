import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div>
              <select id="inputState" class="form-control">
                <option selected="">Choose...</option>
                <option>...</option>
              </select>
              <br/>
              <span class="custom-dropdown">
                  <select class="form-control">
                      <option>Sherlock Holmes</option>
                      <option>The Great Gatsby</option>  
                      <option>V for Vendetta</option>
                      <option>The Wolf of Wallstreet</option>
                      <option>Quantum of Solace</option>
                  </select>
              </span>
            </div>
        );
    }
}

export default Select;