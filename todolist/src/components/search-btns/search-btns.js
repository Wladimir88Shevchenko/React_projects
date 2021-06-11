import React, {Component} from 'react';
import './search-btns.css';

export default class SearchBtns extends Component {

    state = {
        firstBtn: 'clicked',
        secondBtn: '',
        thirdBtn: '',
    }

    choose1 = () => {    
        this.setState(() => {
            return{
            firstBtn: 'clicked',
            secondBtn: '',
            thirdBtn: '',
            }
        });  
    }

    
    choose2 = () => {    
        this.setState(() => {
            return{
            firstBtn: '',
            secondBtn: 'clicked',
            thirdBtn: '',
            }
        });  
    }

    
    choose3 = () => {    
        this.setState(() => {
            return{
            firstBtn: '',
            secondBtn: '',
            thirdBtn: 'clicked',
            }
        });  
    }

    render(){
        const {onSortItems} = this.props;
        return(
            <div>
                <button className={this.state.firstBtn} onClick={() => {onSortItems("all"); this.choose1()}}>All</button>
                <button className={this.state.secondBtn} onClick={() => {onSortItems("active"); this.choose2()}}>Active</button>
                <button className={this.state.thirdBtn} onClick={() => {onSortItems("done"); this.choose3()}}>Done</button>
            </div>
        );
    }
}