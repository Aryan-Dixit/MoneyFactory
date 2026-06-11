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
export default function StarterPlanDescription() {
  const navigation = useNavigation();
  const tw = useTailwind();
  const [index, setIndex] = useState(0);

  const setImage = id => {
    setIndex(id);
  };

  const navigateToStarterPlan = () => {
    navigation.navigate('Home', {screen: 'StarterPlan'});
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
            EquiWealth - Smart {'\n'}Equity Investments
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Unlock the Power of Compounding{' '}
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            Begin your smart equity investment journey with ease.{' '}
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
                    tw('rounded-md flex items-center justify-center'),
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
            Why {'\n'}EquiWealth?
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Accessible Investing{' '}
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            We make wealth creation accessible to all.
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
            How EquiWealth{'\n'}Works?
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text1]}>
            Simplified and Automated
          </Text>
          <Text style={[tw('ml-5 mt-5'), styles.text2]}>
            Invest effortlessly with daily auto-investing for a user-friendly
            experience.
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
                  navigateToStarterPlan();
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
            navigateToStarterPlan();
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
  next: {width: 30, height: 30, backgroundColor: '#292E3C'},
  back: {
    width: 30,
    height: 30,
    backgroundColor: '#bfc0c0',
  },
  next1: {width: 30, height: 30, backgroundColor: '#104F55'},
});
