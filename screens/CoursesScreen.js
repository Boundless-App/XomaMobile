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
} from "react-native";

//import SearchCos from '../pages/SeachBar/SearchCos';

const CoursesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#800000",
                padding: 20,
                width: 150,
                borderRadius: 10,
                marginHorizontal: 2,
              }}
              onPress={() => navigation.navigate("ResourcesScreen")}
            >
              <Text
                style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
              >
                Resources
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#800000",
                padding: 20,
                width: 150,
                borderRadius: 10,
                marginHorizontal: 2,
              }}
              onPress={() => navigation.navigate("OpportunitiesScreen")}
            >
              <Text
                style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
              >
                Opportunities
              </Text>
            </TouchableOpacity>
          </View>
          {/* <SearchCos/> */}
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: "#800000",
              marginTop: 10,
            }}
          >
            Courses
          </Text>
          <View style={{ marginHorizontal: 5, alignItems: "center" }}>
            <View style={styles.imgHolder}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Blogging_and_Writing.png")}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "200",
                  color: "#0000FF",
                  marginTop: 5,
                }}
              >
                Blogging and Writing
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.imgContainer}
                  source={require("../assets/courses/Building_Effective_Teams.png")}
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "200",
                  color: "#0000FF",
                  marginTop: 5,
                }}
              >
                Building Effective Teams
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Career-Mapping-For-Students.png")}
              />
              <Text style={styles.textHolder}>Career Mapping For Students</Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Create_a_Business_Plan_30_Minutes.png")}
              />
              <Text style={styles.textHolder}>
                Create a Business Plan - 30 Minutes
              </Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Digital_Literacy_to_Accelerate_Your_Career.png")}
              />
              <Text style={styles.textHolder}>
                Digital Literacy to Accelerate Your Career
              </Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Email_Communication-Skills-to-Give-You-an-Edge.png")}
              />
              <Text style={styles.textHolder}>
                Email Communication Skills to Give You an Edge
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Financial_Literacy_for_Beginners.png")}
              />
              <Text style={styles.textHolder}>
                Financial Literacy for Beginners
              </Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/How_to_Ace_That_Online_Job_Application.png")}
              />
              <Text style={styles.textHolder}>
                How to Ace That Online Job Application
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/How-to-Nail-That-Job-Interview.png")}
              />
              <Text style={styles.textHolder}>
                How to Nail That Job Interview
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/How-to-Write-a-Winning-CV.png")}
              />
              <Text style={styles.textHolder}>How to Write a Winning CV</Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Marketing_your_brand.png")}
              />
              <Text style={styles.textHolder}>Marketing your brand</Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Personal-Leadership-for-Professional-Growth.png")}
              />
              <Text style={styles.textHolder}>
                Personal Leadership for Professional Growth
              </Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Personality-Types-For-Career-Advancement.png")}
              />
              <Text style={styles.textHolder}>
                Personality Types For Career Advancement
              </Text>
            </View>
            <View style={styles.imgHolder}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Risk_and_Safeguarding.png")}
              />
              <Text style={styles.textHolder}>Risk and Safeguarding</Text>
            </View>
            <View style={styles.imgHolder1}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/courses/Skills-for-Public-Speaking-and-Pitching.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "200",
                  color: "#0000FF",
                  marginTop: 5,
                }}
              >
                Skills for Public Speaking and Pitching
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    height: 200,
    width: 298,
    borderColor: "#dddddd",
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imgHolder: {
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    height: 250,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#dddddd",
    marginTop: 10,
  },
  textHolder: {
    fontSize: 18,
    fontWeight: "200",
    color: "#0000FF",
    marginTop: 10,
  },
  imgHolder1: {
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    height: 280,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#dddddd",
    marginTop: 10,
    marginBottom: 10,
  },
});
