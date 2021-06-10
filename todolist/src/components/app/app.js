import React, {Component} from 'react';
import Header from '../header';
import Search from '../search';
import List from '../list';
import AddItemBtn from '../addItemBtn';
import './app.css';

export default class App extends Component {

    state = {
        todoData : [
            {label: 'Teach children math', important: false, key: 1, done: false},
            {label: 'Learn React', important: false, key: 2, done: false},
            {label: 'Play computer', important: false, key: 3, done: false},
            {label: 'Running', important: false, key: 4, done: false},
            {label: 'Learn Redux', important: false, key: 544, done: false},
            {label: 'Have a lunch', important: false, key: 6, done: false},
          ],
        filterText: '',
    };

    deleteItem = (id) => {
      this.setState(({todoData}) => {
        const newArr = todoData.filter(e => e.key !== id);
        return{
          todoData : newArr,
        }
      });
    }

    toogleImportant = (id) =>{
      this.setState(({todoData}) => {
        const idx = this.state.todoData.findIndex((e) => e.key === id);
        const oldItem = this.state.todoData[idx];
        let newItem = {...oldItem};
        newItem.important = !newItem.important;
        return{
          todoData: [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)],
        }
      });
    }

    toogleDone = (id) =>{
      this.setState(({todoData}) => {
        const idx = this.state.todoData.findIndex((e) => e.key === id);
        const oldItem = this.state.todoData[idx];
        let newItem = {...oldItem};
        newItem.done = !newItem.done;
        return{
          todoData: [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)],
        }
      });
    }

    /* filterList = (newState) => {
      this.setState(({todoData}) => {
        const todoDataReserve = {...todoData};
        return{
          todoData: newState,
        }
      });
    } */

    addItem = (text) => {

      // ищем уникальный ключ
      let potKey = 1;
      do{
        potKey = Math.floor(Math.random() * 100);
      }
      while(this.state.todoData.find(e => e.key === potKey));
      // ZZZ ищем уникальный ключ

      let newItem = {
        label: text,
        important: false,
        key: potKey,
        done: false
      };

      this.setState(({todoData}) => {
        const newArrData = [...todoData, newItem];
        return{
          todoData: newArrData,
        }
      });
    }


    chooseVisibleElements = (todoData, filterText) => {
      if(filterText.length === 0){
        return todoData;
      }

      const filterElements = todoData.filter((e) => {
        return(
          e.label.toLowerCase().includes(filterText.toLowerCase())
        )
      });

      return(filterElements);
    }

    onChangeFilterVelue = (filterText) => {
      this.setState({filterText});
    }

  

     

      render(){
          const {todoData, filterText} = this.state,
          visibleElements = this.chooseVisibleElements(todoData, filterText),
          doneCaunt = todoData.filter((e) => e.done === true).length,
          unDOneCount = todoData.length - doneCaunt;
        return(<div className="todoBox">
            <div className="todoBox--wrapper-center">
                <Header willdo={unDOneCount} did={doneCaunt} />
               {/*  <Search 
                todo={todoData}
                onFilter = {this.filterList}
                /> */}

                <Search
                onChangeFilterVelue = {this.onChangeFilterVelue}/>
                <List 
                todo={visibleElements} 
                onDeleted={this.deleteItem}  
                onImportant={this.toogleImportant}
                onDone={this.toogleDone}
                />
                <AddItemBtn onAddItem={this.addItem} />
            </div>
        </div>);
      }
    
}
