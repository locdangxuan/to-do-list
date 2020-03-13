import React, { Component } from "react";
//import logo from './logo.svg';0:1

import "./App.css";
import TodoItem from "./components/TodoItem";
//import { directive } from '@babel/types';
import tick from "./image/tick.svg";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: "buy cat", isComplete: true },
        { title: "buy dog", isComplete: true },
        { title: "play", isComplete: false }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item) {
    return event => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }

      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: "",
        todoItems: [{ title: text, isComplete: false }, ...this.state.todoItems]
      });
    } else {
      this.setState({
        newItem: text
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} className="tick-logo" alt="tick" />
          <input
            type="text"
            className="input-text"
            value={newItem}
            placeholder="Add a new Item"
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {todoItems.length &&
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {todoItems.length === 0 && <p>Nothing here</p>}
      </div>
    );
  }
}


// const {todoItems} = this.state;
// if(todoItems.length){
//   return (
//     <div className = "App">
//       <img src={logo} className="App-logo" alt="logo" />
//       {todoItems.length && todoItems.map((item, index) =>
//         <TodoItem key = {index}
//                   item = {item}
//                   onClick = {this.onItemClicked}/>
//         )
//       }
//     </div>
//   );
// }else{
//   return <div className = "App"><p>Nothing here</p></div>
// }
