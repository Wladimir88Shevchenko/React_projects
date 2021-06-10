import React from 'react';
import './addItemBtn.css';

export default class AddItemBtn extends React.Component {
    state = {
        label: '', 
    }

    onSbmt = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState(({state}) => {
            return{
                label: '',
            }
        });
    }

    changeLabel = (e) => {
        this.setState(() => {
            return{
                label: e.target.value,
            }
        });
    }

    render(){
        /* const {onAddItem} = this.props; */
        return (
        <form className="fonmWrapper" onSubmit={this.onSbmt}>
            <input 
            onChange={this.changeLabel} 
            placeholder="What to do?"
            value={this.state.label}
             />
            <button>Add new doing</button>
        </form>
        )
    }
}

