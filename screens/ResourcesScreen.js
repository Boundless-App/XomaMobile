import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Linking,
} from "react-native";

const ResourcesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.container}>
          {/* <SearchRes /> */}
          <View
            style={{
              textAlign: "center",
              fontSize: 18,
              alignItems: "center",
              flex: 1,
              fontWeight: "200",
              color: "#FFFF",
              marginTop: 15,
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 60,
              backgroundColor: "grey",
              width: "80%",
              height: 110,
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  alignItems: "center",
                  flex: 1,
                  fontWeight: "700",
                  color: "#FFF",
                  marginTop: 1,
                }}
              >
                {" "}
                Resources{" "}
              </Text>

              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  color: "#FFF",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                Take advantage of free resoorces to guide you on your learning
                or teaching journey
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.imgTxt}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/Vision_Tracker_Poster.png")}
              />

              <View style={styles.container1}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textHolder}>Vision Tracker</Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 15,
                      marginBottom: 1,
                      width: 180,
                      height: 75,
                      paddingLeft: 5,
                    }}
                  >
                    Do you have a dream? Here is a tracker for beginners, to
                    help you bring it to life.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        "https://www.thementoronline.org/documents/2/Vision_Tracker_Boundless_Minds.pdf"
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "#0000FF",
                      }}
                    >
                      CLICK TO DOWNLOAD.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.imgTxt}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/Career_Map_Poster.png")}
              />

              <View style={styles.container1}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textHolder}>Career Map Template</Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 14.5,
                      marginBottom: 1,
                      width: 180,
                      height: 70,
                      paddingLeft: 5,
                    }}
                  >
                    Are you trying to figure out what to do next? Where to go,
                    and how to get there? Here is a map to guide you.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        "https://www.thementoronline.org/documents/4/Career_Mapping_Template.pdf"
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "#0000FF",
                      }}
                    >
                      CLICK TO DOWNLOAD.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.imgTxt}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/Canvas_Poster.png")}
              />

              <View style={styles.container1}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textHolder}>
                    Business Ideation Canvas Template
                  </Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 14.5,
                      marginBottom: 1,
                      width: 180,
                      height: 55,
                      paddingLeft: 5,
                    }}
                  >
                    Do you have an idea? Use this Ideation canvas as a basic
                    business plan!
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        "https://www.thementoronline.org/documents/5/Ideation_Canvas_Template.pdf"
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "#0000FF",
                        marginTop: 3,
                      }}
                    >
                      CLICK TO DOWNLOAD.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.imgTxt}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/CV_poster.png")}
              />

              <View style={styles.container1}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textHolder}>Sample CV Template</Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 14.5,
                      marginBottom: 1,
                      width: 180,
                      height: 70,
                      paddingLeft: 5,
                    }}
                  >
                    CV writing for job applications can be a daunting task.
                    Let's make it easy for you!
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        "https://www.thementoronline.org/documents/6/Sample_CV_Template.pdf"
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "#0000FF",
                        marginTop: 5,
                      }}
                    >
                      CLICK TO DOWNLOAD.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.imgTxt}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/Concept_Note_Poster.png")}
              />

              <View style={styles.container1}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textHolder}>Concept Note Template</Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: 14.5,
                      marginBottom: 1,
                      width: 180,
                      height: 90,
                      paddingLeft: 5,
                    }}
                  >
                    Do you struggle with writing concept notes and proposals?
                    Let us us make it easy for you with this 1 pager template.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        "https://www.thementoronline.org/documents/7/Concept_Note_Template.pdf"
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "#0000FF",
                      }}
                    >
                      CLICK TO DOWNLOAD.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResourcesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  imgContainer: {
    height: 120,
    width: 120,
    resizeMode: "cover",
  },
  textHolder: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0000FF",
    textAlign: "left",
  },
  container1: {
    textAlign: "center",
    fontSize: 15,
    alignItems: "center",
    flex: 1,
    fontWeight: "200",
    color: "#FFFF",
    borderRadius: 5,
    width: 160,
    height: 120,
  },
  imgTxt: {
    marginHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 5,
    height: 140,
  },
});
