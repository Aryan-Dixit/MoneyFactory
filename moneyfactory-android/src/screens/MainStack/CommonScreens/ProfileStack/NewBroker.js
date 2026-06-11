import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {Colors} from '../../../../assets/colors';
import MyStatusBar from '../../../../components/MyStatusBar';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import {MONEY_FACTORY} from '../../../../consts/apis';
import {userDataAtom} from '../../../../atoms/userDataAtom';
import {useRecoilValue} from 'recoil';
import {Dropdown} from 'react-native-element-dropdown';

const NewBroker = () => {
  const tw = useTailwind();
  const user = useRecoilValue(userDataAtom);
  const handleLinkNewBroker = () => {
    if (brokerSelected === 'Fyers') {
      Linking.openURL(
        `https://api.fyers.in/api/v2/generate-authcode?client_id=AYTMZSV1KA-100&redirect_uri=${MONEY_FACTORY}/api/fyersbroker/redirectUrl&response_type=code&state=${user?.id}`,
      );
    }
    if (brokerSelected === 'Angel One') {
      ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT);
    }
    if (brokerSelected === '5 Paisa') {
      Linking.openURL(
        `https://dev-openapi.5paisa.com/WebVendorLogin/VLogin/Index?VendorKey=NxCsOUlkXM1&ResponseURL=${MONEY_FACTORY}/api/fivepaisabroker/refresh&State=${user?.id}`,
      );
    }
  };

  const data = [
    {label: 'Fyers', value: 'Fyers'},
    {label: 'Angel One', value: 'Angel One'},
    {label: '5 Paisa', value: '5 Paisa'},
  ];
  const [brokerSelected, setBrokerSelected] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <SafeAreaView style={[tw('h-full w-full'), styles.container]}>
      <View style={[tw('h-full'), styles.container]}>
        <MyStatusBar padding={15} />
        <View style={[tw('my-3')]}>
          <Header title={`Link your broker`} back={true} />
        </View>
        <View style={[tw('px-5')]}>
          {/* {renderLabel()} */}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderWidth: 0.8}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            containerStyle={{
              backgroundColor: '#292e3c',
              borderWidth: 0,
              borderRadius: 6,
            }}
            itemTextStyle={{
              fontSize: 16,
              lineHeight: 24,
              color: '#ffffff',
            }}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select your Broker' : 'Select your Broker'}
            activeColor="#114F55"
            value={brokerSelected}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setBrokerSelected(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <TouchableOpacity
          style={[tw('px-5 my-3')]}
          onPress={() => {
            handleLinkNewBroker();
          }}
          disabled={!brokerSelected}>
          <Button title="Sign In" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewBroker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.eerie,
  },
  iconLabel: {fontSize: 16, lineHeight: 22, color: Colors.primary},
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    borderRadius: 6,
  },

  dropdown: {
    height: 50,
    borderColor: '#333333',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    borderRadius: 6,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
