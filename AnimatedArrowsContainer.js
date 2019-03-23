import { compose, withState, lifecycle } from 'recompose';
import { Animated } from 'react-native';
import AnimatedArrowsComponent from './AnimatedArrowsComponent';

const doAnimation = ({ opacityAnimation, arrow, size, duration }) => {
  Animated.parallel([
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      delay: 5000,
    }),
    Animated.loop(
      Animated.timing(arrow, {
        toValue: size,
        duration,
        delay: 100,
      }),
    ),
  ]).start();
};

export default compose(
  withState(`arrow`, `setArrow`, new Animated.Value(0)),
  withState(`opacityAnimation`, `setOpacityAnimation`, new Animated.Value(1)),
  lifecycle({
    componentDidMount() {
      const { arrow, opacityAnimation } = this.props;
      arrow.setValue(0);
      opacityAnimation.setValue(1);
      doAnimation({ opacityAnimation, arrow, size: 13, duration: 1000 });
    },
  }),
)(AnimatedArrowsComponent);



