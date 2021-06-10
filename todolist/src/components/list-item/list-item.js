import React, {Component} from 'react';
import './list-item.css';

export default class ListItem extends Component {
/* 
    state = {
        done: false,
        important: false,
    } */

    /* onLabelClick = () => {
        this.setState(({done}) => {
            return{
                done: !done
            } 
        });
    }

    onImportantMark = () =>{
        this.setState(({important}) => {
            return{
                important: !important
            }
        });
    } */
    

    render(){
        const {label, done, important, onDeletedSpan, onDone, onImportant} = this.props;
        let styleSpan = "list-item";
        /* const {done, important} = this.state; */

        if (done){
            styleSpan += " done";
        }

        if(important){
            styleSpan += " important";
        }

    
        return(
        <div className="gridWrapper">
            <span 
            className={styleSpan} 
            onClick= {onDone}
            > 
            {label}
            </span>
            <div className="list--buttons">
                <button className="list--itemicon" onClick={onDeletedSpan}>
                    <i className="fas fa-trash-alt" ></i>
                </button>
                <button className="list--itemicon" onClick={onImportant}>
                    <i className="fas fa-star"></i>
                </button>
            </div>
        </div>
        );
    }
}