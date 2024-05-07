import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// import {IconButton} from 'react-native-paper';
const DummyData = [
  {
    id: '01',
    title: 'wash car',
  },
  {
    id: '02',
    title: 'read a bood',
  },
  {
    id: '03',
    title: 'watching movie',
  },
];

const TodoScreen = () => {
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

        <Icon name="pencil" size={24} color="#fff"/>
        <Icon name="delete" size={24} color="#fff"/>
        {/* <IconButton icon="pencil" iconColor="#fff" />
        <IconButton icon="delete" iconColor="#fff" /> */}
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
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          borderRadius: 6,
          paddingVertical: 8,
          alignItems: 'center',
          marginVertical: 34,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          Add
        </Text>
      </TouchableOpacity>

      {/* Render todo list */}

      <FlatList data={DummyData} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});

// https://youtu.be/MZGKv-UqD4c?si=pk_q2rnsmkpyYcu7
