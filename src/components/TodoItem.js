import React,  { Component } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types'; 

import './TodoItem.css';
import checkImg from '../image/check.svg';
import uncheckImg from '../image/uncheck.svg';

class TodoItem extends Component {
    render(){
        const {item, onClick} = this.props;
        let url = uncheckImg;
        if(item.isComplete){
            url = checkImg;
        }
        return(    
            <div className = {className('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img src = {url} alt = "ckeck" onClick = {onClick} className = "check-logo"/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string.isRequired
    }) ,
    onClick: PropTypes.func
};
export default TodoItem;


// const {item} = this.props;
// let className = 'TodoItem';
// if(item.isComplete){
//     className += ' TodoItem-complete';
// }
// return(
    
//     <div className = {className}>
//         <p>{this.props.item.title}</p>
//     </div>
// );


//onclick
// constructor(props){
//     super(props);
//     this.onItemClick = this.onItemClick.bind(this);
// }
// onItemClick(){
//     this.props.item.isComplete = !this.props.item.isComplete
// }