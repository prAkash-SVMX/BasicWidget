/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState,useMemo, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [checkboxes, setCheckboxes] = useState([{ name: 'cb1', checked: false }, { name: 'cb2', checked: false }]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleClick = (item, index) => {
    console.log('hioiii', index)
    const newData = [...checkboxes];
    newData[index].checked = !newData[index].checked;
  }
    
  
  
    const Form=()=>{
        const [name,setName]=useState();
        const [mob,setMob]=useState();
        const [email,setEmail]=useState();
    //   const radioButtons = useMemo(() => ([
    //     {
    //         id: '1', // acts as primary key, should be unique and non-empty string
    //         label: 'Male',
    //         value: 'option1'
    //     },
    //     {
    //         id: '2',
    //         label: 'Female',
    //         value: 'option2'
    //     }
    // ]), []);
    const radioButtons =[
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Male',
          value: 'option1'
      },
      {
          id: '2',
          label: 'Female',
          value: 'option2'
      }
  ];
    const [selectedId, setSelectedId] = useState();
    const [checkboxes, setCheckboxes] = useState([{
      id: 1,
      title: 'one',
      checked: false,
    }, {
      id: 2,
      title: 'two',
      checked: false,
    }]);
  const [savedUserData,setUserData]=useState();
    const onButtonPress = () => {

      const selectedCheckBoxes = checkboxes.find((cb) => cb.checked === true);
      // selectedCheckBoxes will have checboxes which are selected
    }

    const toggleCheckbox = (id, index) => {

      const checkboxData = [...checkboxes];
      checkboxData[index].checked = !checkboxData[index].checked;
      setCheckboxes(checkboxData);
    }

    const ChecBoxesView =()=> checkboxes.map((cb, index) => {
      return (
        <View style={{flexDirection:"row"}}> 
          <CheckBox
            key={cb.id}
            value={cb.checked}
            onValueChange={() => toggleCheckbox(cb.id, index)} />
          <Text>{cb.title}</Text>
        </View>
      );
  });


const handleSave=()=>{
  
const userData={
  gender:radioButtons[selectedId-1]?.label || 'none',
  Name:name,
  Mob:mob,
  email:email,
  CheckBox:checkboxes

}
AsyncStorage.setItem("userData",JSON.stringify(userData)).then(console.log('saved'));
}

useEffect(()=>{
  AsyncStorage.getItem('userData').then((res)=>{
   
    return JSON.parse(res)}).then((res=>
      setUserData(res)));
      

},[]);

          return (<View>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text>Name:</Text>
              <TextInput placeholder='enter your name' onChangeText={(text)=>{setName(text)}}></TextInput>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text>Mobile:</Text>
              <TextInput placeholder='enter your MOb'onChangeText={(text)=>{setMob(text)}}></TextInput>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
              <Text>Email:</Text>
              <TextInput placeholder='enter your Email' onChangeText={(text)=>setEmail(text)}></TextInput>
            </View>
            <View></View>
            <View></View> 
            <View>
              <Text>Gender</Text>
              <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
        
            </View>
            <View>
           <ChecBoxesView></ChecBoxesView>
            </View>
           
            <Button title='save' onPress={handleSave}></Button>

<Text>{JSON.stringify(savedUserData)}</Text>

            

          </View>);
    }
  return (
    <SafeAreaView style={backgroundStyle, { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar />
      <ScrollView>


        <Text>Hiiiii</Text>
        <Form>

        </Form>


       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
