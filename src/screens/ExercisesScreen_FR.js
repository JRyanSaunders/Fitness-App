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
    image: require("../../assets/images/FR1.png"),
    modalTitle: "Calves",
    modalDesc:
      "Warm-Up: Long Gliding Strokes. It's important not to approach your foam rolling too aggressively. Use the Cross Friction Technique - working on a very targeted area, in a back-and-forth movement perpendicular to the muscle fibers. The final technique is Active Release Technique, applying pressure on the muscle while you work the ankle through its full range of motion.",
  },
  {
    id: "2",
    title: "Tibialis Anterior (Shin)",
    section: "Foam Roller",
    image: require("../../assets/images/FR2.png"),
    modalTitle: "Tibialis Anterior (Shin)",
    modalDesc:
      "One of the most common injuries in the shin area is known as Shin Splints. Start with your weight on your hands and knees, then place the foam roller on the fleshy part of your shine area. (Anterior Tibialis muscles). Make sure you do not roll the shin bone, only the muscle. Keep your foot relaxed throughout the stretch. Repeat for the opposite leg",
  },
  {
    id: "3",
    title: "Quads",
    section: "Foam Roller",
    image: require("../../assets/images/FR3.png"),
    modalTitle: "Quads",
    modalDesc:
      "Starting face down in a push-up position. Place the foam roller horizontally across your lower body, starting up towards your hips. Then, roll yourself up and down the foam roller, targeting your quads. You can angle yourself slightly left and slightly right to hit all the areas of the quads. You could also try single leg quad rolls for added pressure.",
  },
  {
    id: "4",
    title: "ITB (Outside of legs)",
    section: "Foam Roller",
    image: require("../../assets/images/FR4.png"),
    modalTitle: "ITB (Outside of legs)",
    modalDesc:
      "Lie down on your side, if you find that you need extra support, angle your lower leg on the ground. Place the roller under your hip. Position your body on top of the roller, horizontally, right where your hip meets your upper leg. Roll back and forth over your outside thigh. Go slowly and breathe deeply. Don't rush or you may apply too much pressure and worsen any existing problems or create new ones.",
  },
  {
    id: "5",
    title: "Glutes (Bum)",
    section: "Foam Roller",
    image: require("../../assets/images/FR5.png"),
    modalTitle: "Glutes (Bum)",
    modalDesc:
      "Sit on top of a foam roller on the floor with one leg extended in front of you, and one leg bent and braced on the floor. Place your hands on the ground behind you. With your weight supported on your hands, slowly roll the foam roller backwards a few inches under the glutes of the extended leg. Start with light pressure and increase throughout the set. Start with a slow tempo and move across the muscle in a controlled fashion.",
  },
  {
    id: "6",
    title: "Traps (Back)",
    section: "Foam Roller",
    image: require("../../assets/images/FR6.png"),
    modalTitle: "Traps (Back)",
    modalDesc:
      "Foam Roller should be at a 45° angle matching the angle of the traps. A slight angle in the roller will allow each you to roll the length of the trap. Begin with static pressure in one area of the trap. The traps are different than the long muscles within the legs. When rolling the hamstrings athletes will find trigger points throughout the length of the muscle. With the shorter trap muscle athletes will struggle to find one point on which to focus. This is why constant pressure in one area will begin loosening the muscle.",
  },
  {
    id: "7",
    title: "Lats (Side)",
    section: "Foam Roller",
    image: require("../../assets/images/FR7.png"),
    modalTitle: "Lats (Side)",
    modalDesc:
      "Lie on your side on the floor with the foam roller under your armpit and extend your arm away from your body above your head. Slowly roll back and forth to find a tender spot. Hold on tender spots for 30-60 seconds until the discomfort is reduced. Switch sides and repeat.",
  },
  {
    id: "8",
    title: "Pecs (Chest)",
    section: "Foam Roller",
    image: require("../../assets/images/FR8.png"),
    modalTitle: "Pecs (Chest)",
    modalDesc:
      "Lying on your stomach, placing the foam roll parallel to your body on the inside of your armpit and shoulder. Engage your core and slowly roll outwards, bringing the foam roll towards you, stopping at the first tender spot and hold for 30 seconds (or more if you are comfortable). For men, you can continue to roll outwards, bringing the foam roll towards the chest, or the entirely length of the chest if needed. For ladies, for obvious anatomical reasons, only roll as much of the chest as comfortable as possible.",
  },
];

export default function ExercisesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.exerciseImage} />
      <View style={styles.detailSection}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.section}>{item.section}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
          openSettingsModal(item);
        }}
      >
        <Text style={styles.viewText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const openSettingsModal = (item) => {
    setCurrentItem(item);
    setModalVisible(!modalVisible);
  };

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
            <Text style={styles.modalTitle}>{currentItem.modalTitle}</Text>
            <Text style={styles.modalText}>{currentItem.modalDesc}</Text>
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
        renderItem={({ item }) => <Item item={item} />}
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
    borderRadius: 0,
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
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
