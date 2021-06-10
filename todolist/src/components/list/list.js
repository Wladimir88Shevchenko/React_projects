import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = ({todo, onDeleted, onImportant, onDone}) => {
    const liArr = todo.map((e) => {
        const {key:k, ...pr} = e;

        return(
            <li key={k} className="list"> 
                <ListItem 
                className="list--text" 
                {...pr} 
                onDeletedSpan={() => onDeleted(k)}
                onImportant={() => onImportant(k)}
                onDone={() => onDone(k)}                
                /> 
            </li>
        );
    });

    return(
        <ol className="list-wrapper">
            {liArr}
        </ol>
    );

}

export default List;