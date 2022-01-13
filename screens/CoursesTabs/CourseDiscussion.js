import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { COLORS, dummyData2, FONTS, SIZES } from "../../constants";

const CommentSection = ({ commentItem, commentOption, replies }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: SIZES.padding,
      }}
    >
      {/* Profile Image */}
      <Image
        source={commentItem?.profile}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      />
      {/* Name & Comment */}
      <View
        style={{
          flex: 1,
          marginTop: 3,
          marginLeft: SIZES.radius,
        }}
      >
        {/* Comment */}

        <Text style={{ ...FONTS.body4 }}>{commentItem?.comment}</Text>
        {/* Name */}
        <Text style={{ ...FONTS.h3 }}>
          {commentItem?.name}|{commentItem?.posted_on}
        </Text>

        {/* Comment Options */}
        {commentOption}
      </View>
    </View>
  );
};

const CourseDiscussion = () => {
  function renderDiscussion() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={dummyData2?.courses_details?.discussions}
          keyExtractor={(item) => `Discussions-${item.id}`}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            paddingBottom: 70,
          }}
          renderItem={({ item, index }) => (
            <CommentSection
              commentItem={item}
              commentOption={
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: SIZES.radius,
                    paddingVertical: SIZES.base,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: COLORS.gray1,
                  }}
                >
                  {/* Comment */}

                  {/* Like */}

                  {/* Dislike */}

                  {/* Date */}
                </View>
              }
              // replies={}
            />
          )}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray5,
      }}
    >
      {/* Discussion */}
      {renderDiscussion()}
      {/* Footer */}
    </View>
  );
};

export default CourseDiscussion;
