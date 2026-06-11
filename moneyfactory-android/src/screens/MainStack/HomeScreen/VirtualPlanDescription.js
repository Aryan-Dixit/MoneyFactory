import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import ArrowRight from '../../../assets/icons/right.svg';
import {useTailwind} from 'tailwind-rn';
import {Colors} from '../../../assets/colors';
import MyStatusBar from '../../../components/MyStatusBar';
import {useNavigation} from '@react-navigation/native';
import Progress1 from '../../../assets/images/Progress1.svg';
import Progress2 from '../../../assets/images/Progress2.svg';
import Progress3 from '../../../assets/images/Progress3.svg';
import ArrowLeft from '../../../assets/icons/Vector.svg';
import Button from '../../../components/Button';
const windowWidth = Dimensions.get('window').width;
export default function VirtualPlanDescription() {
  const navigation = useNavigation();
  const tw = useTailwind();
  const [index, setIndex] = useState(0);

  const setImage = id => {
    setIndex(id);
  };

  const navigateToVirtualPortFolio = () => {
    navigation.navigate('Home', {screen: 'VirtualPortFolio'});
  };

  return (
    <SafeAreaView style={[tw('flex h-full'), {backgroundColor: Colors.eerie}]}>
      <MyStatusBar />

      {index === 0 && (
        <View
          style={[
            tw('flex h-full items-start justify-center'),
            {backgroundColor: '#FFFAEF'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Elevate Your {'\n'}Trades
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Where Expertise Meets Innovation
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            Unlock investment potential with an innovative approach.{' '}
          </Text>
          <View style={styles.bottomNav}>
            <Progress1 />

            <View style={[tw('flex flex-row')]}>
              <TouchableOpacity
                onPress={() => {
                  setImage(index + 1);
                }}>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center '),
                    styles.next,
                  ]}>
                  <ArrowRight />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {index === 1 && (
        <View
          style={[
            tw('flex h-full items-start justify-center'),
            {backgroundColor: '#EFFFF3'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Building {'\n'}Confidence
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Try Before You Trade{' '}
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            Explore the power of a virtual portfolio to boost your confidence in
            real trades. build a virtual portfolio up to 1 crore.
          </Text>
          <View style={styles.bottomNav}>
            <Progress2 />

            <View style={[tw('flex flex-row')]}>
              <TouchableOpacity
                onPress={() => {
                  setImage(index - 1);
                }}>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center mr-3'),
                    styles.back,
                  ]}>
                  <ArrowLeft />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setImage(index + 1);
                }}>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center '),
                    styles.next,
                  ]}>
                  <ArrowRight />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {index === 2 && (
        <View
          style={[
            tw('flex h-full items-start justify-center'),
            {backgroundColor: '#FFEFEF'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Alpha {'\n'}Generation
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Professional Trading Strategies
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            Unlock the path to alpha generation with expert strategies.
          </Text>
          <View style={styles.bottomNav}>
            <Progress3 />

            <View style={[tw('flex flex-row')]}>
              <TouchableOpacity
                onPress={() => {
                  setImage(index - 1);
                }}>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center mr-3'),
                    styles.back,
                  ]}>
                  <ArrowLeft />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigateToVirtualPortFolio();
                }}>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center '),
                    styles.next,
                  ]}>
                  <ArrowRight />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={styles.bottomNav2}>
        <TouchableOpacity
          style={[tw('w-full')]}
          onPress={() => {
            navigateToVirtualPortFolio();
          }}>
          <Button title="Get Started" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {height: '75%', width: windowWidth},
  text: {
    textAlign: 'left',
    color: '#292E3C',
    fontSize: 40,
    lineHeight: 60,
  },
  text1: {
    textAlign: 'left',
    color: '#292E3C',
    fontSize: 24,
    lineHeight: 36,
  },
  text2: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 20,
    lineHeight: 30,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 80,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomNav2: {
    position: 'absolute',
    bottom: 20,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  skip: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.yellow,
  },
  back: {width: 30, height: 30, backgroundColor: '#bfc0c0'},
  next: {width: 30, height: 30, backgroundColor: '#292E3C'},
  next1: {width: 30, height: 30, backgroundColor: '#104F55'},
});
