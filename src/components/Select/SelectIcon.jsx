import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class SelectIcon extends Component {
    render() {
        return (
            <div>
                <span class="custom-dropdown">
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Sherlock Holmes</option>
                        <option>The Great Gatsby</option>  
                        <option>V for Vendetta</option>
                        <option>The Wolf of Wallstreet</option>
                        <option>Quantum of Solace</option>
                    </Input>
                </span>
            </div>
        );
    }
}

export default SelectIcon;