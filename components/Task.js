import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

import {useNavigation} from '@react-navigation/native';

const Task = props => {
  const navigation = useNavigation();

  const handleTaskPress = () => {
    navigation.navigate('Todo', {
      id: props.id,
      title: props.title,
      category: props.category,
      date: props.date,
    });
  };

  return (
    <TouchableOpacity onPress={handleTaskPress}>
      <View style={styles.item}>
        <View style={styles.taskDetails}>
          <Text style={styles.taskItemText}>{props.title}</Text>
          <Text style={styles.sub}>{props.category}</Text>
          <Text style={styles.sub}>{props.date}</Text>
        </View>
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskDetails: {
    flexDirection: 'column',
    flex: 1,
  },
  taskItemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  sub: {
    fontSize: 14,
    color: '#666',
  },
});

export default Task;
