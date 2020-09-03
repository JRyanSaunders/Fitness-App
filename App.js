import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppLoading } from "expo";

import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Colors } from "./colors/Colors";

import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import StatsScreen from "./screens/StatsScreen";

const getFonts = () =>
  Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

const Tab = createBottomTabNavigator();
const NestedStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#7B4FFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Nested}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Nested = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false, title: "Back" }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <NestedStack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          title: "Workout",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
      <NestedStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          title: "Statistics",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
        }}
      />
    </NestedStack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
