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

const OpportunitiesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.container}>
          {/* <SearchOpp /> */}
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
              backgroundColor: "grey",
              width: "90%",
              height: 125,
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
                Opportunities{" "}
              </Text>

              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  color: "#FFF",
                  fontSize: 15,
                  textAlign: "left",
                }}
              >
                Explore entry-level jobs, funding and training opportunities,
                fellowships, scholarships and volunteer opportunities
              </Text>
            </View>
          </View>
          {/* container1 */}
          <View style={styles.oppContainer}>
            <Text style={styles.txtHeader}>Scholarships</Text>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.maastrichtuniversity.nl/support/your-studies-begin/coming-maastricht-university-abroad/scholarships/maastricht-university"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  Maastricht University Holland High Potential Scholarship
                  2022/2023 for International Students
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://ii.umich.edu/asc/umaps.html");
                }}
              >
                <Text style={styles.textHolder}>
                  University of Michigan African Presidential Scholars Programme
                  (UMAPS) 2022/2023
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* container2 */}
          <View style={styles.oppContainer}>
            <Text style={styles.txtHeader}>Internships</Text>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://absa.wd3.myworkdayjobs.com/en-US/ABSAcareersite/job/Sandton/Global-Markets-Graduate_R-15923138"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  ABSA Global Markets Graduate Programme 2021 for Graduate
                  Africans
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://unu.edu/about/internship/junior-fellows-internship-programme.html#overview"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  Opening Soon: United Nations University Office of the Rector
                  Junior Fellows Internship Programme 2022 – Japan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* container3 */}
          <View style={styles.oppContainer}>
            <Text style={styles.txtHeader}>Fellowships & Research</Text>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "http://itatti.harvard.edu/i-tatti-dhi-rom-joint-fellowship-african-studies"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  Harvard I Tatti/DHI Rom Joint Fellowship for African Studies
                  2022/2023
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.cultureinexternalrelations.eu/2021/09/01/apply-for-the-global-cultural-relations-programme-2021/"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  European Union Global Cultural Relations Programme 2021 for
                  Young Leaders
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* container4 */}
          <View style={styles.oppContainer}>
            <Text style={styles.txtHeader}>Contests</Text>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://innovation.wfp.org/apply");
                }}
              >
                <Text style={styles.textHolder}>
                  WFP Innovation Accelerator 2021 for Solutions to Hunger
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.commonwealthwriters.org/shortstoryprize/info/"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  Commonwealth Short Story Prize 2022 for Commonwealth Countries
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* container5 */}
          <View style={styles.oppContainer}>
            <Text style={styles.txtHeader}>Entrepreneurship</Text>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.afterschoolafrica.com/9200/business-plan-competitions-and-awards-for-african-entrepreneurs/"
                  );
                }}
              >
                <Text style={styles.textHolder}>
                  Ultimate List: 40+ Business Funding Opportunities & Awards for
                  African Entrepreneurs
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imgContainer}
                source={require("../assets/bookmark.png")}
              />
              <Text style={styles.textHolder}>More Upcoming soon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    height: 80,
    width: 50,
    borderColor: "#dddddd",
    resizeMode: "cover",
  },

  textHolder: {
    fontSize: 15,
    fontWeight: "200",
    color: "#800000",
    paddingRight: 20,
    paddingLeft: 7,
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  txtHeader: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "700",
    color: "#800000",
    fontSize: 18,
    textAlign: "left",
  },
  oppContainer: {
    borderWidth: 1,
    width: "95%",
    height: 240,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
