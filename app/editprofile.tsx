// import React, { useState } from "react";
// import {
//   Alert,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// // import * as ImagePicker from "expo-image-picker";
// import { router } from "expo-router";

// export default function EditUserProfile() {
//   const [image, setImage] = useState<string | null>(null);
//   const [name, setName] = useState("John Doe");
//   const [dob, setDob] = useState("2000-01-01");
//   const [address, setAddress] = useState("123 Main Street");

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const handleSave = () => {
//     if (!name || !dob || !address) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }
//     Alert.alert("Success", "Profile updated successfully!");
//     router.back();
//   };

//   const handleCancel = () => {
//     router.back();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Edit Profile</Text>

//       {/* Profile Image */}
//       <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
//         {image ? (
//           <Image source={{ uri: image }} style={styles.profileImage} />
//         ) : (
//           <View style={styles.placeholder}>
//             <Text style={styles.placeholderText}>Upload Image</Text>
//           </View>
//         )}
//       </TouchableOpacity>

//       {/* Input Fields */}
//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="John Doe"
//           placeholderTextColor="#aaa"
//           value={name}
//           onChangeText={setName}
//         />
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Date of Birth</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="YYYY-MM-DD"
//           placeholderTextColor="#aaa"
//           value={dob}
//           onChangeText={setDob}
//         />
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Address</Text>
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Enter your address"
//           placeholderTextColor="#aaa"
//           multiline
//           value={address}
//           onChangeText={setAddress}
//         />
//       </View>

//       {/* Buttons */}
//       <View style={styles.buttonRow}>
//         <TouchableOpacity
//           style={[styles.button, styles.cancelButton]}
//           onPress={handleCancel}
//         >
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.saveButton]}
//           onPress={handleSave}
//         >
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "linear-gradient(180deg, #3498db, #6dd5fa)", // gradient look
//     justifyContent: "flex-start",
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   imageContainer: {
//     alignSelf: "center",
//     marginBottom: 30,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 6,
//   },
//   profileImage: {
//     width: 130,
//     height: 130,
//     borderRadius: 65,
//     borderWidth: 3,
//     borderColor: "#fff",
//   },
//   placeholder: {
//     width: 130,
//     height: 130,
//     borderRadius: 65,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   placeholderText: {
//     color: "#3498db",
//     fontWeight: "bold",
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     color: "#fff",
//     fontWeight: "600",
//     marginBottom: 6,
//   },
//   input: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     fontSize: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 3 },
//     shadowRadius: 6,
//   },
//   textArea: {
//     height: 80,
//     textAlignVertical: "top",
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 30,
//   },
//   button: {
//     flex: 0.48,
//     paddingVertical: 16,
//     borderRadius: 14,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//   },
//   cancelButton: {
//     backgroundColor: "#e74c3c",
//   },
//   saveButton: {
//     backgroundColor: "#27ae60",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
