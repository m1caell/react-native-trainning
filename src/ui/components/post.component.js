import React, { PureComponent } from "react";
import { View, Text, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export class Post extends PureComponent {
  render() {
    const { post } = this.props;

    return (
      <View key={post.autor}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: post.perfil }}
            style={{ width: 50, height: 50, borderRadius: 25, margin: 10 }}
          />
          <View style={{ flex: 1 }}>
            <Text>{post.autor}</Text>
            {post.local ? (
              <Text style={{ color: "#555" }}>{post.local}</Text>
            ) : null}
          </View>
          <Image
            source={require("../../img/dots.png")}
            style={{ width: 15, height: 15, margin: 10 }}
          />
        </View>
        <Image
          source={{ uri: post.imagem }}
          style={{ width: width, height: width }}
        />
        <View
          style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
        >
          {post.liked ? (
            <Image
              source={require("../../img/like-full.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          ) : (
            <Image
              source={require("../../img/like.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          )}
          <Text>{post.curtidas} Likes</Text>
        </View>
      </View>
    );
  }
}
