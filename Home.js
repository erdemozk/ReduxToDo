import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Component from './Component';
import {ToDoAdd, ToDoDelete} from './actions/ToDoActions';

const Home = ({todos, ToDoAdd}) => {

    const [value, onChangeText] = React.useState('');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.SafeAreaView}>
                <ScrollView
                contentContainerStyle={styles.scrollView}>
                    <View style={styles.body}>
                        {/*----Add ToDo----*/}
                        <TextInput
                            style={styles.firstView}
                            placeholder='Enter a ToDo'
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            clearButtonMode='while-editing'/>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => (ToDoAdd(value))}>
                            <Text>
                            Add
                            </Text>
                        </TouchableOpacity>
                        {/*----List ToDo----*/}
                        <View style={styles.firstView}>
                            <Text>
                            Yapılacaklar
                            </Text>
                        </View>

                        {todos.map((todo) => (<Component key={todo.id} todo={todo}/>))}

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: {
      flex: 1, 
      backgroundColor: '#D9D6D6'
    },
    scrollView: {
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      flex: 1,
      paddingTop: 30
    },
    firstView: {
      backgroundColor: '#D9D6D6',
      borderColor: 'black',
      borderBottomWidth: 1,
      width: Dimensions.get("window").width / 1.5,
      height: Dimensions.get("window").height / 17,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    modelView: {
      backgroundColor: '#D9D6D6',
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
    button: {
      backgroundColor: '#D9D6D6',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 50,
      width: Dimensions.get("window").width / 1.5,
      height: Dimensions.get("window").height / 17,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      paddingHorizontal: 20,
      flexDirection: 'row'
    }
});

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = {ToDoAdd, ToDoDelete}

export default connect(mapStateToProps, mapDispatchToProps)(Home)