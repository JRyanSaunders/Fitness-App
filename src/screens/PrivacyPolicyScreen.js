import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Colors } from "../colors/Colors";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Privacy Policy Effective Date: 5/1/2020
        </Text>
        <Text style={styles.paragraph}>
          Welcome to Flex. Our Privacy Policy explains how we collect, use,
          share, and store your information and the control that you have over
          it. Feel free to contact us at jryansaunders@gmail.com if you have any
          questions.
        </Text>
        <Text style={styles.title}>INFORMATION WE COLLECT</Text>
        <Text style={styles.paragraph}>
          When you use our service, we may collect information related to your
          usage and activity (time, duration, frequency, etc).
        </Text>
        <Text style={styles.title}>HOW WE USE INFORMATION​</Text>
        <Text style={styles.paragraph}>
          Some of the specific ways we use the information include: ​ to
          develop, improve, deliver, and protect our services to monitor and
          analyze trends and usage to enforce our Terms of Service and other
          usage policies ​ Additionally, we and/or our trusted partners may
          contact you from time to time with offers that may interest you and/or
          to inform you of other products and services. Further, we may, from
          time to time, expand or reduce our business which may involve the
          transfer of certain divisions or assets of our company to other
          parties, and the data we store and use, where relevant, may be
          transferred to such third parties. We will transmit such information
          only to entities that comply with appropriate policy and applicable
          law. We may also store or use information locally on your device. For
          example, we may store information as local cache so that you can open
          the app and view content faster.
        </Text>
        <Text style={styles.title}>HOW WE SHARE INFORMATION</Text>
        <Text style={styles.paragraph}>
          Flex may share your information in the following ways: ​ With third
          parties. We may share information with third parties for legal
          reasons, as part of a merger or acquisition, and with service
          providers, sellers, and partners. We will transmit such information
          only to entities that comply with appropriate policy and applicable
          law. Flex may store the information that is collected through our
          services and retain as long as necessary.
        </Text>
        <Text style={styles.title}>OTHER WEBSITES AND SERVICES</Text>
        <Text style={styles.paragraph}>
          Content posted to our service may contain links to other websites or
          services. Please remember that when you use a link to go from our
          service to another website or service, our Privacy Policy does not
          apply to those third-party websites or services. You acknowledge and
          agree that we are not responsible for how those third parties collect
          or use your information.
        </Text>
        <Text style={styles.title}>CHILDREN'S PRIVACY</Text>
        <Text style={styles.paragraph}>
          As noted in the Terms of Use, we do not knowingly collect or solicit
          personal information from anyone under the age of 13. If you are under
          13, please do not attempt to register for the Services or send any
          personal information about yourself to us. If we learn that we have
          collected personal information from a child under age 13, we will
          delete that information as quickly as possible. If you believe that a
          child under 13 may have provided us personal information, please
          contact us.
        </Text>
        <Text style={styles.paragraph}>
          Please review our Privacy Policy periodically as we may modify or
          update it from time to time. Your usage of our service after any
          revisions will constitute your acceptance of the modification.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    paddingVertical: "5%",
    fontSize: 28,
    fontWeight: "bold",
  },
  title: {
    paddingVertical: "5%",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  paragraph: {
    paddingHorizontal: "5%",
    paddingVertical: 2,
    fontSize: 14,
  },
});
