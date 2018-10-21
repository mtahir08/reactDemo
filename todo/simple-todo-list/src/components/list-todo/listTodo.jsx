import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import Delete from 'material-ui/svg-icons/action/delete';
import DATA from '../../data/data'
class ListTodo extends Component {

    checkValue(index, event, checked) {
        this.props.completed(index, event.target.value, checked)

    }
    delete(index) {
        this.props.deleted(index);
    }
    render() {
        // not able to get index
        /*const iconButtonElement = (
            <IconButton
                touch={true} onClick={this.delete.bind(this)}
                tooltip="delete">  <Delete color={'red'} />
            </IconButton>
        );*/
        const listTodo = () => {
            if (this.props.list.todo.todoList.length != 0) {
                var listItem = this.props.list.todo.todoList.map((item, index) =>
                    <ListItem primaryText={item.item} leftCheckbox={<Checkbox onCheck={this.checkValue.bind(this, index)} value={item.item} />}
                        key={index} rightIconButton={<IconButton touch={true} onClick={this.delete.bind(this, index)}
                            tooltip="delete">  <Delete color={'red'} />
                        </IconButton>} />
                )
                return <List>{listItem}</List>
            }
            else return null
        }
        return listTodo()
    }
}
export default ListTodo