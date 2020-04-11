import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '177.191.29.205' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
