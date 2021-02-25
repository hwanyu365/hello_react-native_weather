import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import {
  Ionicons,
  Feather,
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ condition, temp, title, subtitle }) {
  const options = weatherOptions[condition];

  return (
    <LinearGradient
      style={styles.container}
      // Background Linear Gradient
      colors={options.bgColor}
    >
      <View style={styles.containerContents}>
        {options.icon}
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <View style={{ ...styles.containerContents, ...styles.textContainer }}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subTitle}>{options.subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

const weatherOptions = {
  Thunderstorm: {
    icon: <Ionicons name="thunderstorm-outline" size={96} color="white" />,
    bgColor: ["#20002c", "#cbb4d4"],
  },
  Drizzle: {
    icon: <Feather name="cloud-drizzle" size={96} color="white" />,
    bgColor: ["#4c669f", "#3b5998", "#192f6a"],
  },
  Rain: {
    icon: <Feather name="cloud-rain" size={96} color="white" />,
    bgColor: ["#2C3E50", "#4CA1AF"],
  },
  Snow: {
    icon: <Feather name="cloud-snow" size={96} color="white" />,
    bgColor: ["#E0EAFC", "#CFDEF3"],
  },
  Clear: {
    icon: <Feather name="sun" size={96} color="white" />,
    bgColor: ["#2980B9", "#6DD5FA", "#FFFFFF"],
  },
  Clouds: {
    icon: <AntDesign name="cloudo" size={96} color="white" />,
    bgColor: ["#bdc3c7", "#2c3e50"],
  },
  Haze: {
    icon: <Fontisto name="day-haze" size={96} color="white" />,
    bgColor: ["#485563", "#29323c"],
  },
  Mist: {
    icon: <MaterialCommunityIcons name="weather-fog" size={96} color="white" />,
    bgColor: ["#4c669f", "#3b5998", "#192f6a"],
  },
};

Weather.prototype = {
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    color: "white",
    fontSize: 42,
  },

  containerContents: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
});
