import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";

import api from "./api/feed.json";

import { Post } from "./ui/components/post.component";
import { IgIcon } from './components/IgIcon/ig-icon.component'

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {this._renderNavBar()}
        <ScrollView>
          {api.feed.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
        {this._renderTabs()}
      </SafeAreaView>
    );
  }

  _renderNavBar() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 62,
          paddingHorizontal: 10,
          paddingTop: 20,
          borderBottomWidth: 1,
          borderColor: "#ddd"
        }}
      >
        {/* <Image
          source={require("./img/camera.png")}
          style={{ width: 23, height: 23 }}
        /> */}
        <IgIcon name='photo-camera' style={{ fontSize: 40, color: 'red' }} />
        <Image
          source={require("./img/instagram_logo.png")}
          style={{ width: 100, height: 40, resizeMode: "contain" }}
        />
        <Image
          source={require("./img/send.png")}
          style={{ width: 23, height: 23 }}
        />
      </View>
    );
  }

  _renderTabs() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 42,
          paddingHorizontal: 30,
          borderTopWidth: 1,
          borderColor: "#ddd"
        }}
      >
        <Image
          source={require("./img/camera.png")}
          style={{ width: 23, height: 23 }}
        />
        <Image
          source={require("./img/send.png")}
          style={{ width: 23, height: 23 }}
        />
        <Image
          source={require("./img/camera.png")}
          style={{ width: 23, height: 23 }}
        />
        <Image
          source={require("./img/send.png")}
          style={{ width: 23, height: 23 }}
        />
        <Image
          source={require("./img/camera.png")}
          style={{ width: 23, height: 23 }}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({});
