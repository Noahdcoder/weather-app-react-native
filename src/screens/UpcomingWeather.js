import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

export default function UpcomingWeather({ weatherData }) {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp}
        max={item.main.humidity}
      />
    );
  };
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="dark-content" backgroundColor="royalblue" />
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
