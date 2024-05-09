import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// import {IconButton} from 'react-native-paper';

console.log(Date.now().toString());

const TodoScreen = () => {
  //inital local state
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  //handle Add todo
  const handleAddTodo = () => {
    //stracture of single todo item
    // {
    //   id:
    //   title:
    // }
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo('');
  };
  //handle deleteTodo
  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };
  //render todo
  const renderTodos = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#1e90ff',
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 12,
          marginBottom: 12,
          flexDirection: 'row',
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '800', flex: 1}}>
          {item.title}
        </Text>

        <Icon name="pencil" size={24} color="#fff" />
        <Icon
          name="delete"
          size={24}
          color="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 16, marginTop: 10}}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#1e90ff',
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 12,
        }}
        placeholder="add a task"
        value={todo}
        onChangeText={userText => setTodo(userText)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          borderRadius: 6,
          paddingVertical: 8,
          alignItems: 'center',
          marginVertical: 34,
        }}
        onPress={() => handleAddTodo()}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          Add
        </Text>
      </TouchableOpacity>

      {/* Render todo list */}

      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
