/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

const App = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const [word, setWord] = React.useState('');
    const [noOfConsonants, setNoOfConsonants] = React.useState(0);
    const [noOfVowels, setNoOfVowels] = React.useState(0);

    const analyze = () => {
        let v = word.toLowerCase().split('').filter((e) => vowels.includes(e)).length;
        let c = word.length - v;
        setNoOfConsonants(c);
        setNoOfVowels(v);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>A Word Analyzer</Text>
            <View style={[styles.row, { paddingBottom: 24 }]} >
                <Text style={styles.rowItem}>Word</Text>
                <TextInput value={word} onChangeText={setWord} style={styles.textField} />
            </View>
            <Button onPress={analyze} title="Analyze" />
            <View style={[styles.row, { paddingTop: 24 }]}>
                <Text style={styles.rowItem}>Word</Text>
                <Text style={styles.rowItem}>: {word}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowItem}>No of Consonants</Text>
                <Text style={styles.rowItem}>: {noOfConsonants}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowItem}>No of Vowels</Text>
                <Text style={styles.rowItem}>: {noOfVowels}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowItem}>No of Characters</Text>
                <Text style={styles.rowItem}>: {word.length}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  header: {
    marginTop: 24,
    marginBottom: 36,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  textField: {
    borderWidth: 1,
    width: '50%',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default App;
