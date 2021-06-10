import React, {Component} from 'react';
import './search-btns.css';

export default class SearchBtns extends Component {
    render(){
        return(
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Done</button>
            </div>
        );
    }
}