import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowRight from '../../assets/icons/right.svg';
import {useTailwind} from 'tailwind-rn';
import {Colors} from '../../assets/colors';
import MyStatusBar from '../../components/MyStatusBar';
import {useNavigation} from '@react-navigation/native';
import Progress1 from '../../assets/images/Progress1.svg';
import Progress2 from '../../assets/images/Progress2.svg';
import Progress3 from '../../assets/images/Progress3.svg';
import Broker1 from '../../assets/images/broker1.svg';
import Broker2 from '../../assets/images/broker2.svg';
import Broker3 from '../../assets/images/broker3.svg';
import Broker4 from '../../assets/images/broker4.svg';
import Powered from '../../assets/images/powered.svg';
import Safe from '../../assets/images/safe.svg';
import Made from '../../assets/images/made.svg';
import ArrowLeftSlider from '../../assets/icons/Vector.svg';

const windowWidth = Dimensions.get('window').width;
export default function SliderScreen() {
  const navigation = useNavigation();
  const tw = useTailwind();
  const [index, setIndex] = useState(0);
  const setUserAsOld = async () => {
    try {
      await AsyncStorage.setItem('oldUser', 'true');
      navigation.replace('SignIn');
    } catch (e) {
      // saving error
    }
  };
  const setImage = id => {
    setIndex(id);
  };

  return (
    <SafeAreaView style={[tw('flex h-full'), {backgroundColor: Colors.eerie}]}>
      <MyStatusBar />

      {index === 0 && (
        <View style={[tw('flex h-full '), {backgroundColor: '#FFFFFF'}]}>
          <Text style={[tw('font-medium mt-[15%]'), styles.text2]}>
            Auto Invest in{' '}
            <Text
              style={[
                tw('font-bold'),
                {...styles.text2, color: Colors.primary},
              ]}>
              Stocks
            </Text>
          </Text>
          <View style={[tw('mt-[10%]')]}>
            <Text style={[tw('font-semibold mb-3'), styles.text2]}>
              Broker Partners
            </Text>
            <View style={[tw('flex flex-row items-center justify-center')]}>
              <View
                style={[
                  tw(
                    'h-14 mr-2 flex items-center justify-center w-14 rounded-full bg-[#f8f8f8]',
                  ),
                ]}>
                <Broker2 />
              </View>
              <View
                style={[
                  tw(
                    'h-14 mr-2 flex items-center justify-center w-14 rounded-full bg-[#f8f8f8]',
                  ),
                ]}>
                <Broker3 />
              </View>
              <View
                style={[
                  tw(
                    'h-14 mr-2 flex items-center justify-center w-14 rounded-full bg-[#f8f8f8]',
                  ),
                ]}>
                <Broker1 />
              </View>
              <View
                style={[
                  tw(
                    'h-14 mr-2 flex items-center justify-center w-14 rounded-full bg-[#f8f8f8]',
                  ),
                ]}>
                <Broker4 />
              </View>
            </View>
          </View>
          <View style={[tw('mt-[10%] flex items-center justify-center')]}>
            <Powered />
          </View>
          <View style={[tw('mt-[10%] flex items-center justify-center')]}>
            <Safe />
          </View>
          <View style={[tw('mt-[10%] flex items-center justify-center')]}>
            <Made />
          </View>
          {/* <Image source={splash} style={{}} resizeMode="contain" /> */}
          <View style={styles.bottomNav}>
            <View style={{display: 'flex'}}></View>

            <View style={[tw('flex flex-row')]}>
              <TouchableOpacity
                style={[tw('flex flex-row items-center')]}
                onPress={() => {
                  setImage(index + 1);
                }}>
                <Text
                  style={[
                    tw('font-semibold mr-2'),
                    {
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#104F55',
                    },
                  ]}>
                  Next
                </Text>
                <View
                  style={[
                    tw('rounded-md flex items-center justify-center '),
                    styles.next1,
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
            {backgroundColor: '#FFFAEF'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Auto Invest in {'\n'}Stocks
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Your path to potentially <Text style={{color: '#FCB017'}}>5X</Text>{' '}
            higher returns.
          </Text>
          <View style={styles.bottomNav}>
            <Progress1 />

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
                  <ArrowLeftSlider />
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
            {backgroundColor: '#EFFFF3'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Minimal {'\n'}Investment:
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Start with just Rs<Text style={{color: '#FCB017'}}>100.</Text>
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
                  <ArrowLeftSlider />
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
      {index === 3 && (
        <View
          style={[
            tw('flex h-full items-start justify-center'),
            {backgroundColor: '#FFEFEF'},
          ]}>
          <Text style={[tw('font-bold ml-5'), styles.text]}>
            Security & {'\n'}Liquidity:
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Auto-investments in equities are secured in{' '}
            <Text style={{color: '#FCB017'}}>Demat</Text> accounts, offering
            instant access.
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
                  <ArrowLeftSlider />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setUserAsOld();
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
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    lineHeight: 36,
  },
  bottomNav: {
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
