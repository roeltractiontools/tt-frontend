import React, { Component } from 'react';
import avatar from '../../img/avatar.png';

class TableArchive extends Component {
    render() {
        return (
            <div>
              <div class="table-container">
                <div class="table-heading"><h3>Archive Last Quarter Rocks</h3></div>
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Not Done</th>
                      <th>Done</th>
                      <th>Archive
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark-solid"></span>
                        </label>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={avatar} alt="Avatar" class="avatar"/></td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                      <td>
                        <label class="radio">
                          <input type="radio" checked="checked" name="status_1"/>
                          <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="radio">
                        <input type="radio" checked="checked" name="status_1"/>
                        <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={avatar} alt="Avatar" class="avatar"/></td>
                      <td>Batman</td>
                      <td>
                        <label class="radio">
                          <input type="radio" checked="checked" name="status_2"/>
                          <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="radio">
                          <input type="radio" name="status_2"/>
                          <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={avatar} alt="Avatar" class="avatar"/></td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                      <td>
                        <label class="radio">
                        <input type="radio" checked="checked" name="status_3"/>
                        <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="radio">
                          <input type="radio" checked="checked" name="status_3"/>
                          <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={avatar} alt="Avatar" class="avatar"/></td>
                      <td>Superman</td>
                      <td>
                        <label class="radio">
                          <input type="radio" checked="checked" name="status_4"/>
                          <span class="checkround"></span>
                        </label>
                      </td>
                      <td>
                        <label class="radio">
                          <input type="radio" name="status_4"/>
                          <span class="checkround"></span>
                        </label>
                        </td>
                      <td>
                        <label class="check">
                          <input type="checkbox" checked="checked" name="is_name"/>
                          <span class="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default TableArchive;