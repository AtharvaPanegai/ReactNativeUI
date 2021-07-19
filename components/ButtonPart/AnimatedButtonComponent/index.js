/** @format */

import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatedButtonComponent = () => {
  // Refs
  const bounceAniref = useRef();
  const flashAniref = useRef();
  const jelloAniref = useRef();
  const pulseAniref = useRef();
  const rotateAniref = useRef();
  const rubberBandAniref = useRef();
  const shakeAniref = useRef();
  const swingAniref = useRef();
  const tadaAniref = useRef();
  const wobbleAniref = useRef();
  return (
    <View>
      {/* Bounce */}
      <Animatable.View ref={bounceAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#E03B8B" }]}
          onPress={() => {
            if (true) {
              bounceAniref.current.bounce(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>bounce Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      {/* Flash */}
      <Animatable.View ref={flashAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#E07C24" }]}
          onPress={() => {
            if (true) {
              flashAniref.current.flash(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Flash Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      {/* jello */}
      <Animatable.View ref={jelloAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#758283" }]}
          onPress={() => {
            if (true) {
              jelloAniref.current.jello(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Jello Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={pulseAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#8D3DAF" }]}
          onPress={() => {
            if (true) {
              pulseAniref.current.pulse(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Pulse Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={rotateAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#FF6666" }]}
          onPress={() => {
            if (true) {
              rotateAniref.current.rotate(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Rotate Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={rubberBandAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#242B2E" }]}
          onPress={() => {
            if (true) {
              rubberBandAniref.current.rubberBand(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>rubberBand Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={shakeAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#03C6C7" }]}
          onPress={() => {
            if (true) {
              shakeAniref.current.shake(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>shake Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={swingAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#5A20CB" }]}
          onPress={() => {
            if (true) {
              swingAniref.current.swing(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>swingAniref Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={tadaAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#6A1B4D" }]}
          onPress={() => {
            if (true) {
              tadaAniref.current.tada(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Tada Button</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View ref={wobbleAniref}>
        <TouchableOpacity
          style={[styles.animatedButton, { backgroundColor: "#CAD5E2" }]}
          onPress={() => {
            if (true) {
              wobbleAniref.current.wobble(800);
            }
          }}>
          <Text style={styles.animatedButtonText}>Wobble Button</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default AnimatedButtonComponent;

const styles = StyleSheet.create({
  animatedButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginVertical: 7,
  },
  animatedButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});
