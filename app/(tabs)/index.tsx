import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

const index = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not pick any image!");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="use this photo" />
      </View>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

// This is a simple React Native component that displays a welcome message and a button.
