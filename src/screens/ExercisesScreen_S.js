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
    image: require("../../assets/images/S1.png"),
    modalTitle: "Calves and Hamstrings: one",
    modalDesc:
      "Sit on the ground with the left leg bent at the knee with the foot facing inward. This is called the butterfly position. Extend the right leg, keeping it slightly bent at the knee. Bend forward at the waist, making sure to keep the back straight.",
  },
  {
    id: "2",
    title: "Calves and Hamstrings: two",
    section: "Stretches",
    image: require("../../assets/images/S2.png"),
    modalTitle: "Adductors: one",
    modalDesc:
      "Stand straight with your legs about hip width apart. You want your legs to be straight, but don’t aggressively lock out your knees either (this feels like a “microbend” to a lot of people). Begin by bending and leaning forward towards the ground with your quads (front of your legs). Let your body rest naturally, as if you were a ragdoll. Keeping your hands relatively close together, straighten your fingers and begin to stretch down slowly to the ground.",
  },
  {
    id: "3",
    title: "Adductors: one",
    section: "Stretches",
    image: require("../../assets/images/S3.png"),
    modalTitle: "Adductors: two",
    modalDesc:
      "To stretch both sides simultaneously sit with your legs straight out in front of you with your back straight. Slowly work your legs apart as far as they will go. Hold this and relax for a few seconds. Now as you exhale bend forward at your hips until you feel more resistance. Be sure to keep your chest up and maintain a lumbar lordosis (normal inward curvature of the lower back).",
  },
  {
    id: "4",
    title: "Quads",
    section: "Stretches",
    image: require("../../assets/images/S4.png"),
    modalTitle: "Hip Flexors",
    modalDesc:
      "From a standing position with your knees together, lift one foot and grasp it with your hand. Gently press your foot towards your glutes until you feel a stretch along the front of your thigh.",
  },
  {
    id: "5",
    title: "Adductors: two",
    section: "Stretches",
    image: require("../../assets/images/S5.png"),
    modalTitle: "Calves and Hamstrings: two",
    modalDesc:
      "Sitting with your legs extended. Bend your knees towards you while keeping your feet together. Let your knees fall out to the sides. You should feel a stretch in the groin region. To increase the stretch, place your elbows on your knees and push down.",
  },
  {
    id: "6",
    title: "Calves and Hamstrings: three",
    section: "Stretches",
    image: require("../../assets/images/S6.png"),
    modalTitle: "Quads",
    modalDesc:
      "Stand upright with the spine in a neutral position. Place the right leg in front of the body with the foot flexed, the heel pushed into the ground, and the toe pointing toward the ceiling. Slightly bend the left knee. Gently lean forward and place the hands on the straight right leg. Keep a neutral spine.",
  },
  {
    id: "7",
    title: "Hip Flexors",
    section: "Stretches",
    image: require("../../assets/images/S7.png"),
    modalTitle: "Calves and Hamstrings: three",
    modalDesc:
      "Kneel with your left knee on the floor and your right leg at a 90-degree angle in front of you. Put your hands on your right knee and keep your back straight. Keeping your left knee pressed to the floor, lean forward into your right hip while squeezing the muscles in your left buttocks. Hold for and repeat on the other side.",
  },
  {
    id: "8",
    title: "Glutes (Bum)",
    section: "Stretches",
    image: require("../../assets/images/S8.png"),
    modalTitle: "Glutes (Bum)",
    modalDesc:
      "You could also do the pigeon pose or Seated figure-four stretch. But for this example we will use the standing figure-four stretch. Stand up straight. Cross your left ankle over your right thigh, just above the knee to make a 4 shape. Hold on to a desk or wall for support. Slowly bend your right knee, moving your hips down into a squat position. Pause when you feel a stretch in your left glute.",
  },
  {
    id: "9",
    title: "Abs",
    section: "Stretches",
    image: require("../../assets/images/S9.png"),
    modalTitle: "Abs",
    modalDesc:
      "The cobra pose. Start by lying on the floor face down with your hands under your shoulders. Keep your hips on the floor as you lift your upper body with your arms so your chest is out and you’re facing forward. To get more out of the stretch, straighten your arms fully and lift your hips slightly off of the ground.",
  },
  {
    id: "10",
    title: "Triceps",
    section: "Stretches",
    image: require("../../assets/images/S10.png"),
    modalTitle: "Lats (Sides)",
    modalDesc:
      "Stand straight with your feet shoulder width apart and knees slight bent. Point your left elbow toward the ceiling and touch the center of your upper back with your left hand. If you're not able to reach your upper back, put your hand on the back of your head instead. Bend your head forward when you put your hand on it, and then push your head back gently to increase the pull on your triceps.",
  },
  {
    id: "11",
    title: "Pecs (Chest)",
    section: "Stretches",
    image: require("../../assets/images/S11.png"),
    modalTitle: "Deltoid (Shoulder)",
    modalDesc:
      "Pull a towel behind your back (You can also use your hands if you have good mobility). Stand with your feet about hip-width apart, shoulders relaxed back. Hold the towel behind your back gripping one end in each hand, elbows straight. Pull back with your hands until your shoulders are open and extended and you feel a stretch in your chest.",
  },
  {
    id: "12",
    title: "Lats (sides)",
    section: "Stretches",
    image: require("../../assets/images/S12.png"),
    modalTitle: "Triceps",
    modalDesc:
      "Stand up straight. Reach back toward your left hip with your left palm on the floor for balance. Extend your right arm towards the ceiling in this position and then extend it over your head and as far to the left as you can. Bend you torso to your left side when you begin extending your arm and keep your butt in the right position on the floor. Hold the position until you feel a stretch on your back’s right side.",
  },
  {
    id: "13",
    title: "Deltoid (Shoulder)",
    section: "Stretches",
    image: require("../../assets/images/S13.png"),
    modalTitle: "Pecs (Chest)",
    modalDesc:
      "Relax your shoulders. Reach one arm across your body, using your other arm or wrist to hold it gently by your upper arm. Slowly begin to pull your arm toward your chest, as far as possible, allowing the stretch to reach deep into the back of your shoulder. Pause, breathing deeply into the stretch.",
  },
];

export default function StretchesScreen() {
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
        <Text style={styles.subTitle}>EXERCISES: STRETCHES</Text>
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
            <Text style={styles.modalText}>{currentItem.modalTitle}</Text>
            <Text style={styles.modalText}>{currentItem.modalDesc}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
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
    textAlign: "center",
  },
});
