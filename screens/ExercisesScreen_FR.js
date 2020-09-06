import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";

import { Colors } from "../colors/Colors";

const DATA = [
  {
    id: "1",
    title: "Calves",
    section: "Foam Roller",
    image: require("../assets/FR1.png"),
  },
  {
    id: "2",
    title: "Tibialis Anterior (Shin)",
    section: "Foam Roller",
    image: require("../assets/FR2.png"),
  },
  {
    id: "3",
    title: "Quads",
    section: "Foam Roller",
    image: require("../assets/FR3.png"),
  },
  {
    id: "4",
    title: "ITB (Outside of legs)",
    section: "Foam Roller",
    image: require("../assets/FR4.png"),
  },
  {
    id: "5",
    title: "Glutes (Bum)",
    section: "Foam Roller",
    image: require("../assets/FR5.png"),
  },
  {
    id: "6",
    title: "Traps (Back)",
    section: "Foam Roller",
    image: require("../assets/FR6.png"),
  },
  {
    id: "7",
    title: "Lats (Side)",
    section: "Foam Roller",
    image: require("../assets/FR7.png"),
  },
  {
    id: "8",
    title: "Pecs (Chest)",
    section: "Foam Roller",
    image: require("../assets/FR8.png"),
  },
];

export default function ExercisesScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const Item = ({ title, image, section }) => (
    <View style={styles.item}>
      <Image source={image} style={styles.exerciseImage} />
      <View style={styles.detailSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.section}>{section}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.viewText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} section={item.section} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBackground}>
        <Text style={styles.subTitle}>EXERCISES: FOAM ROLLER</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBackground: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "10%",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    position: "absolute",
    color: "white",
    fontSize: 10,
  },
  item: {
    padding: 20,
    backgroundColor: "#FFF",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: Colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  exerciseImage: {
    width: "20%",
    height: 60,
    borderRadius: 30,
    marginRight: 30,
  },
  detailSection: {
    width: "50%",
    justifyContent: "center",
    left: 0,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
  },
  section: {
    fontSize: 10,
  },
  viewButton: {
    height: 40,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.greyMedium,
    borderRadius: 3,
  },
  viewText: {
    left: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
