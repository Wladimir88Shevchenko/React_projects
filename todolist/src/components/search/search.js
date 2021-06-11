import React from 'react';
import SearchBtn from '../search-btns';
import './search.css';
/* 
const Search = ({todo, onFilter}) => {
    
    const findSubstring = (e) => {
        const newState = todo.filter((k) =>
        k.label.toLowerCase().includes(e.target.value.toLowerCase()));
        if(e.target.value != ''){
            onFilter(newState);
        }else{
            onFilter(newState);
        }  
    }

    return (
    <div className="searchWrapper">
        <input 
        className="searchWrapper--searchField" 
        placeholder="Type text for search" 
        onChange={findSubstring}
        />
        <div className="searchWrapper--btns">
            <SearchBtn  />
        </div>  
    </div>
    );
}

export default Search; */

export default class Search extends React.Component {

    /* state = {
        filterText: '',
    } */

    onChangeFilter = (e) => {
        const filterText = e.target.value;
        /* this.setState({filterText}); */
        this.props.onChangeFilterVelue(filterText);

    } 

    render(){
        return (
        <div className="searchWrapper">
            <input 
            className="searchWrapper--searchField" 
            placeholder="Type text for search" 
            onChange={this.onChangeFilter}
            /* value={this.state.filterText} */
            />
            <div className="searchWrapper--btns">
                <SearchBtn 
                onSortItems = {this.props.onSortItems} 
                />
            </div>  
        </div>
        );
    }
}