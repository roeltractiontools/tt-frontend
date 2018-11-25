import React, { Component } from 'react';
import Table from '../components/Tables/Table'
import TableArchive from '../components/Tables/TableArchive'
class tablepage extends Component {
    render() {
        return (
            <div>
                <h3>Basic Table</h3>
                <Table/>
                <h3>Archive Table</h3>
                <TableArchive/>
            </div>
        );
    }
}

export default tablepage;