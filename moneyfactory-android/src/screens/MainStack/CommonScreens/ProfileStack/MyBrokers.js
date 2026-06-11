import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useTailwind} from 'tailwind-rn';
import {Colors} from '../../../../assets/colors';
import GetApi from '../../../../hooks/GetApi';
import apis from '../../../../consts/apis';
import MyStatusBar from '../../../../components/MyStatusBar';
import {useRecoilValue} from 'recoil';
import {userDataAtom} from '../../../../atoms/userDataAtom';
import Header from '../../../../components/Header';
import NoBrokers from '../../../../assets/images/nobrokers.svg';
import Button from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import BrokerCard from '../../../../components/BrokerCard';
import Demat1 from './mask.png';
import Icon1 from '../../../../assets/icons/demat1.svg';
import Icon2 from '../../../../assets/icons/demat2.svg';
const windowHeight = Dimensions.get('window').height;

const MyBrokers = () => {
  const tw = useTailwind();
  const user = useRecoilValue(userDataAtom);
  const [loading, setLoading] = useState(false);
  const [brokers, setBrokers] = useState([]);
  const renderLoader = () => {
    if (loading) {
      return (
        <View style={[styles.containerLoader, styles.horizontal]}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }
  };
  async function fetchMyBrokers() {
    setLoading(true);
    let result = await GetApi(`${apis.mybrokers}/${user?.id}`);
    if (result.status === 200) {
      if (result.data.profile.broker_accounts) {
        setBrokers(result.data.profile.broker_accounts);
      }
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMyBrokers();
  }, []);

  const navigation = useNavigation();

  const navigateToListNewBroker = () => {
    navigation.navigate('ListNewBroker');
  };

  const handleOpenURL = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(
      'https://open-account.fyers.in/?utm-source=AP-Leads&utm-medium=AP1463',
    );

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(
        'https://open-account.fyers.in/?utm-source=AP-Leads&utm-medium=AP1463',
      );
    } else {
      ToastAndroid.show(`Don't know how to open this URL`, ToastAndroid.SHORT);
    }
  });
  return (
    <SafeAreaView style={[tw('h-full w-full'), styles.container]}>
      <View style={[tw('h-full pb-5'), styles.container]}>
        <MyStatusBar padding={15} />
        <View style={[tw('my-3')]}>
          <Header title={`My Brokers`} back={true} />
        </View>
        {brokers.length <= 0 ? (
          <>
            <View
              style={[
                (tw('my-8 px-5'),
                {
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }),
              ]}>
              <NoBrokers />
            </View>

            <Text
              style={[
                tw('px-5 my-5 text-center font-bold'),
                {
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 20,
                  lineHeight: 27,
                },
              ]}>
              No broker linked
            </Text>
            <Text
              style={[
                tw('px-5 mb-5 text-center'),
                {
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 14,
                  lineHeight: 24,
                },
              ]}>
              Oops! It appears that your account is not linked to a broker.
            </Text>
          </>
        ) : (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={[tw('px-5')]}>
            {Object.keys(brokers)?.map((broker, index) => {
              return <BrokerCard key={index} broker={broker} />;
            })}
            <View
              style={[
                tw(
                  'w-full h-40 p-3 bg-[#104f55] flex flex-row items-start justify-between rounded-md my-2',
                ),
              ]}>
              <View style={[tw('flex items-start justify-between')]}>
                <View
                  style={[
                    tw('flex flex-row items-center justify-center mb-5'),
                  ]}>
                  <Icon1 />
                  <Text
                    style={[
                      tw('font-bold ml-2'),
                      {...styles.subheader, color: '#cefd1e'},
                    ]}>
                    Don't have an Account with{'\n'}these brokers,
                  </Text>
                </View>
                <Text
                  style={[
                    tw('font-medium mb-5'),
                    {...styles.signup, color: '#ffffff'},
                  ]}>
                  Open a Moneyfactory Powered{'\n'}Free Demat Account.
                </Text>
                <TouchableOpacity onPress={handleOpenURL}>
                  <View
                    style={[
                      tw('flex flex-row items-center justify-center mb-5'),
                    ]}>
                    <Text
                      style={[
                        tw('font-bold mr-2'),
                        {...styles.subheader, color: '#00D37F'},
                      ]}>
                      Open an Account
                    </Text>
                    <Icon2 />
                  </View>
                </TouchableOpacity>
              </View>
              <Image
                source={Demat1}
                style={{
                  width: '50%',
                  height: '100%',
                  resizeMode: 'contain',
                  marginRight: '-5%',
                }}
              />
            </View>

            <View style={{height: 100}} />
          </ScrollView>
        )}

        <TouchableOpacity
          style={[tw('px-5 '), {}]}
          onPress={navigateToListNewBroker}>
          <Button title="Add New Broker" />
        </TouchableOpacity>
      </View>
      {renderLoader()}
    </SafeAreaView>
  );
};

export default MyBrokers;

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.eerie,

    opacity: 0.5,
    height: windowHeight,
    position: 'absolute',
    width: '100%',
  },
  container: {
    backgroundColor: Colors.eerie,
  },
  header: {color: Colors.white, fontSize: 20, lineHeight: 28},
  subheader: {color: Colors.dullwhite, fontSize: 15, lineHeight: 18},
  signup: {
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 22,
  },
  text: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  text1: {
    color: '#cefd1e',
    fontSize: 16,
    lineHeight: 22,
  },
  text2: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  text3: {
    color: Colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
});
