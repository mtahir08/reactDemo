import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native"
import { captilize } from "./utils/helper";
import { Button  } from "native-base"
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: ''
    }

    console.log("constructor")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentWillMount() {
    console.log("componentWillMount")
    
  }
  onChangeInput(text) {
    console.log(text)
    this.setState({
      value: text
    })
    // let todo = this.state.todos;
    // todo.push(text)
    // this.setState({
    //   todos: todo
    // })
  }
  addTodo() {
      let todo = this.state.todos;
    todo.push(this.state.value)
    this.setState({
      todos: todo
    })
  }
  
  render() {
    console.log("render")
    
    return (
      <View style={styles.root}>
        <TextInput style={styles.input} onChangeText={this.onChangeInput.bind(this)} />
        <Button primary onPress={this.addTodo.bind(this)}><Text>Click</Text></Button>
        {
          this.state.todos.map((value, index) => {
            return <Text style={[
              styles.item,
              styles.text
            ]} key={index}>{index + 1} -- { captilize(value) }</Text>
          })
        }
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  text: {
    fontSize: 20
  },
  input: {
    width: 300
  },
  item: {
    color: 'blue',
    borderColor: 'red',
    borderWidth: 2
  }
})