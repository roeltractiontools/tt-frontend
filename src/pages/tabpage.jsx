import React, { Component } from 'react';
import Tabs from '../components/Tabs/Tabs';

class tabpage extends Component {
    render() {
        return (
            <div>
                <Tabs tabName={'First Tab'}>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                nim keffiyeh helvetica, craft beer labore wes anderson cred
                sapiente ea proident.
                </Tabs>
                <Tabs tabName={'Second Tab'}>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                nim keffiyeh helvetica, craft beer labore wes anderson cred
                sapiente ea proident.
                </Tabs>
                <Tabs tabName={'Third Tab'}>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                nim keffiyeh helvetica, craft beer labore wes anderson cred
                sapiente ea proident.
                </Tabs>
            </div>
        );
    }
}

export default tabpage;