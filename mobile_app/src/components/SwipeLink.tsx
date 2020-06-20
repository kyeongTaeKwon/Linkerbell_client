import React, { useEffect } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";

type Props = {
  setSwipe: (bool: boolean) => void;
  children: JSX.Element;
};
const SwipeLink = ({ setSwipe, children }: Props): JSX.Element => {
  const gestureDelay = -35;

  const translateX = new Animated.Value(0);
  const position = new Animated.ValueXY();
  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dx < -35) {
        const newX = gestureState.dx + gestureDelay;
        position.setValue({ x: newX, y: 0 });
      }
      if (gestureState.dx < 0) {
        setSwipe(true);
        Animated.event([null, { dx: translateX }])(e, gestureState);
      }
    },
    onPanResponderRelease: (e, { dx }) => {
      const screenWidth = Dimensions.get("window").width;
      if (Math.abs(dx) >= 0.3 * screenWidth) {
        Animated.timing(translateX, {
          toValue: dx < 0 ? -240 : 0,
          duration: 600,
        }).start();
      } else {
        // setSwipe(false);
        Animated.spring(translateX, {
          toValue: 0,
          bounciness: 0,
        }).start();
      }
    },
  });
  useEffect(() => {
    translateX.addListener(({ value }) => value === 0 && setSwipe(false));
  }, [translateX]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX }],
        // backgroundColor: "yellow",
        height: 130,
        maxHeight: 130,
        width: 375,
        marginBottom: 4,
      }}
      {..._panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};
export default SwipeLink;
