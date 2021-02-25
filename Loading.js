import React from "react";
import { StyleSheet, Text, View, Alert, StatusBar } from "react-native";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "475a1e1ccdee5705c657fdd6f9c17647";

export default class Loading extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    console.log("render");
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      );
    } else {
      const weather = this.state.weather;
      return (
        <Weather condition={weather.weather[0].main} temp={weather.main.temp} />
      );
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getWeather = async (location) => {
    const coords = location.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          isLoading: false,
          coords: location.coords,
          weather: json,
        });
      });
  };

  getLocation = async () => {
    try {
      const response = await Location.getPermissionsAsync();
      if (response === "none") {
        console.log(response);
        response = await Location.requestPermissionsAsync();
        if (response !== "granted") {
          Alert.alert("Can't find you.", "So sad.");
          return;
        }
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      this.getWeather(location);
    } catch (error) {
      console.log(error);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF6AA",
  },

  text: {
    fontSize: 50,
    color: "white",
  },
});
