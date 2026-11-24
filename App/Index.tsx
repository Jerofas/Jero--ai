
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export default function HomeScreen() {
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>JERO AI</Text>
          <Text style={styles.subtitle}>YOUR INTELLIGENT COMPANION</Text>
        </View>
        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>READY</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.orb}>✦</Text>
          <Text style={styles.heading}>Think beyond limits.</Text>
          <Text style={styles.description}>
            Your ideas, questions and possibilities start here.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>EXPLORE JERO AI</Text>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>✧</Text>
            <Text style={styles.cardTitle}>Ask anything</Text>
            <Text style={styles.cardText}>Get answers and ideas.</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>⌘</Text>
            <Text style={styles.cardTitle}>Create</Text>
            <Text style={styles.cardText}>Write, plan and build.</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>◈</Text>
            <Text style={styles.cardTitle}>Research</Text>
            <Text style={styles.cardText}>Explore information.</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>◎</Text>
            <Text style={styles.cardTitle}>Offline AI</Text>
            <Text style={styles.cardText}>Local intelligence coming.</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Message JERO AI..."
          placeholderTextColor="#817B91"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Pressable
          style={styles.sendButton}
          onPress={() => setMessage("")}
        >
          <Text style={styles.sendText}>↑</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>POWERED BY JEROFAS</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090611",
    paddingTop: 55
  },
  header: {
    paddingHorizontal: 22,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#251B37",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    letterSpacing: 3
  },
  subtitle: {
    color: "#9A8BAF",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 5
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#191329",
    padding: 9,
    borderRadius: 20
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#B78AFF",
    marginRight: 7
  },
  statusText: {
    color: "#D6C2FF",
    fontSize: 9,
    fontWeight: "bold"
  },
  content: {
    padding: 22,
    paddingBottom: 30
  },
  hero: {
    paddingVertical: 35,
    alignItems: "center"
  },
  orb: {
    color: "#BD91FF",
    fontSize: 55,
    marginBottom: 18
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center"
  },
  description: {
    color: "#A69BB8",
    fontSize: 13,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 21
  },
  sectionTitle: {
    color: "#A995C8",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 15
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    width: "48%",
    backgroundColor: "#151020",
    borderColor: "#302342",
    borderWidth: 1,
    borderRadius: 17,
    padding: 17,
    marginBottom: 13,
    minHeight: 125
  },
  cardIcon: {
    color: "#C49BFF",
    fontSize: 24,
    marginBottom: 12
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold"
  },
  cardText: {
    color: "#9B91A9",
    fontSize: 11,
    marginTop: 7
  },
  inputArea: {
    marginHorizontal: 17,
    marginBottom: 12,
    backgroundColor: "#191329",
    borderColor: "#493265",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    maxHeight: 90,
    paddingVertical: 10
  },
  sendButton: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: "#9561D8",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8
  },
  sendText: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    color: "#655B75",
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 12
  }
});
