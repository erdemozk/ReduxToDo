import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {ToDoDelete, ToDoCompleted} from "./actions/ToDoActions";

const deleteIcon = require('./x-green.png')

const Component = ({todo, ToDoDelete, ToDoCompleted}) => {
    
    isCompleted = todo.completed

    return(
        <TouchableOpacity 
            style={[styles.modelView, {backgroundColor: !todo.completed ? "#D9D6D6" : "#B2F77D" }]}
            onPress={() => (ToDoCompleted(todo.id))}>
            <Text>
                {todo.text}
            </Text>
            <TouchableOpacity
                onPress={() => (ToDoDelete(todo.id))}>
                <Image
                source={deleteIcon}
                style={styles.icon}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  modelView: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 17,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
});

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {ToDoDelete, ToDoCompleted}

export default connect(mapStateToProps, mapDispatchToProps)(Component)