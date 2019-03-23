import React from 'react';
import { Animated } from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from './icon';

const AnimatedArrowsComponent = ({ opacityAnimation, arrow }) => (
  <Animated.View
    style={{
      opacity: opacityAnimation,
      height: 30,
      width: 100,
      flexDirection: `row`,
    }}
  >
    <Animated.View
      style={{
        opacity: arrow.interpolate({
          inputRange: [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13],
          outputRange: [0.5,0.5,0.5,0.5,0.6,0.7,0.8,0.9,1,0.9,0.8,0.7,0.6,0.5],
        }),
      }}
    >
      <Icon name="ArrowIcon" height={25} width={25} fill="white" />
    </Animated.View>
    <Animated.View
      style={{
        opacity: arrow.interpolate({
          inputRange: [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13],
          outputRange: [0.5,0.5,0.5, 0.6, 0.7,0.8,0.9,1,0.9,0.8,0.7,0.6,0.5,0.5],
        }),
      }}
    >
      <Icon name="ArrowIcon" height={25} width={25} fill="white" />
    </Animated.View>
    <Animated.View
      style={{
        opacity: arrow.interpolate({
          inputRange: [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13],
          outputRange: [0.5,0.5, 0.6, 0.7,0.8,0.9,1,0.9,0.8,0.7,0.6,0.5,0.5,0.5],
        }),
      }}
    >
      <Icon name="ArrowIcon" height={25} width={25} fill="white" />
    </Animated.View>
    <Animated.View
      style={{
        opacity: arrow.interpolate({
          inputRange: [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13],
          outputRange: [0.5, 0.6, 0.7,0.8,0.9,1,0.9,0.8,0.7,0.6,0.5,0.5,0.5,0.5],
        }),
      }}
    >
      <Icon name="ArrowIcon" height={25} width={25} fill="white" />
    </Animated.View>
  </Animated.View>
);

AnimatedArrowsComponent.propTypes = {
  arrow: PropTypes.shape({}).isRequired,
  opacityAnimation: PropTypes.shape({}).isRequired,
};

export default AnimatedArrowsComponent;

