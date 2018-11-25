import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </th>
                      <th>Last Name</th>
                      <th>Super Hero</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Super Hero</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Super Hero</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td>Parker</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                      <td>Spiderman</td>
                    </tr>
                    <tr>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td>Wayne</td>
                      <td>Batman</td>
                      <td>Batman</td>
                      <td>Batman</td>
                      <td>Batman</td>
                      <td>Batman</td>
                      <td>Batman</td>
                      <td>Batman</td>
                    </tr>
                    <tr>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td>Kent</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                    </tr>
                    <tr>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td>Kent</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                      <td>Superman</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default Table;