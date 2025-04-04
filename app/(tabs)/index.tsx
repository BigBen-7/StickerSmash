import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

const index = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button  label="use this photo" />
      </View>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

// This is a simple React Native component that displays a welcome message and a button.
