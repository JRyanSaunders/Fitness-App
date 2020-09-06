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
    title: "Calves and Hamstrings: one",
    section: "Stretches",
    image: require("../assets/S1.png"),
    modalTitle: "Calves and Hamstrings: one",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    title: "Adductors: one",
    section: "Stretches",
    image: require("../assets/S2.png"),
    modalTitle: "Adductors: one",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    title: "Adductors: two",
    section: "Stretches",
    image: require("../assets/S3.png"),
    modalTitle: "Adductors: two",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    title: "Hip Flexors",
    section: "Stretches",
    image: require("../assets/S4.png"),
    modalTitle: "Hip Flexors",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "5",
    title: "Calves and Hamstrings: two",
    section: "Stretches",
    image: require("../assets/S5.png"),
    modalTitle: "Calves and Hamstrings: two",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "6",
    title: "Quads",
    section: "Stretches",
    image: require("../assets/S6.png"),
    modalTitle: "Quads",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "7",
    title: "Calves and Hamstrings: three",
    section: "Stretches",
    image: require("../assets/S7.png"),
    modalTitle: "Calves and Hamstrings: three",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "8",
    title: "Glutes (Bum)",
    section: "Stretches",
    image: require("../assets/S8.png"),
    modalTitle: "Glutes (Bum)",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "9",
    title: "Abs",
    section: "Stretches",
    image: require("../assets/S9.png"),
    modalTitle: "Abs",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "10",
    title: "Lats (Sides)",
    section: "Stretches",
    image: require("../assets/S10.png"),
    modalTitle: "Lats (Sides)",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "11",
    title: "Deltoid (Shoulder)",
    section: "Stretches",
    image: require("../assets/S11.png"),
    modalTitle: "Deltoid (Shoulder)",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "12",
    title: "Triceps",
    section: "Stretches",
    image: require("../assets/S12.png"),
    modalTitle: "Triceps",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "13",
    title: "Pecs (Chest)",
    section: "Stretches",
    image: require("../assets/S13.png"),
    modalTitle: "Pecs (Chest)",
    modalDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function StretchesScreen() {
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

  const modalItem = ({ modalTitle, modalDesc }) => (
    <View style={styles.modalItem}>
      <Text style={styles.modalTitle}>{modalTitle}</Text>
      <Text style={styles.modalDesc}>{modalDesc}</Text>
    </View>
  );

  const renderModalItem = ({ modalItem }) => (
    <modalItem
      modalTitle={modalItem.modalTitle}
      modalDesc={modalItem.modalDesc}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBackground}>
        <Text style={styles.subTitle}>EXERCISES: STRETCHES</Text>
      </View>
      <Modal
        animationType="slide"
        renderItem={modalItem}
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
