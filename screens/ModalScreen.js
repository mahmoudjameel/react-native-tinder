import { useNavigation } from '@react-navigation/core';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'tailwind-rn';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';

const ModalScreen = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [job, setJob] = useState(null);
    const [age, setAge] = useState(null);

    const incompleteForm = !image || !job || !age;

    /*useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Update your profile",
        headerStyle: { backgroundColor: "#FF5864" },
        headerTitleStyle: { color: "white" },
      });
    }, []);*/

    const updateUserProfile = () => {
      setDoc(doc(db, 'users', user.uid), { 
        id: user.uid,
        displayName: user.displayName,
        photoURL: image,
        job: job,
        age: age,
        timestamp: serverTimestamp()
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
    };
    
    return (
        <View style={tw("flex-1 items-center pt-1")}>
            <Image 
              style={tw("h-20 w-full")}
              resizeMode="contain"
              source={{ uri: "https://links.papareact.com/2pf"}}
            />
            <Text style={tw("text-xl text-gray-500 p-2 font-bold")}> Welcome {user.displayName}</Text>
            <Text style={tw("text-center p-4 font-bold text-red-400")}> Step 1: The Profile Pic</Text>
            <TextInput 
             value={image}
             onChangeText={setImage}
             style={tw("text-center text-xl pb-2")}
             placeholder="Enter a Profile Pic URL"
            />

            <Text style={tw("text-center p-4 font-bold text-red-400")}> Step 2: The Job</Text>
            <TextInput
             value={job}
             onChangeText={setJob} 
             style={tw("text-center text-xl pb-2")}
             placeholder="Enter your occupation"
            />

            <Text style={tw("text-center p-4 font-bold text-red-400")}> Step 3: The Age</Text>
            <TextInput
             value={age}
             onChangeText={setAge} 
             style={tw("text-center text-xl pb-2")}
             placeholder="Enter your age"
             maxLength={2}
            />

            <TouchableOpacity
             disabled={incompleteForm}
             onPress={updateUserProfile}
             style={[tw("w-64 p-3 rounded-xl absolute bottom-10 "),
              incompleteForm ? tw("bg-gray-400") : tw("bg-red-400")]}>
               <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>  
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreen;
