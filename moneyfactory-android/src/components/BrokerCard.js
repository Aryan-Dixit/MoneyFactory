import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Linking,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {SvgUri} from 'react-native-svg';
import {MONEY_FACTORY, MONEY_FACTORY_IMAGE} from '../consts/apis';
import {Colors} from '../assets/colors';
import Button from './Button';
import Fyers from '../assets/icons/_fyres.svg';
import Paisa from '../assets/icons/paisa.svg';
import Angel from '../assets/icons/_angleBroking.svg';
import {useRecoilValue} from 'recoil';
import {userDataAtom} from '../atoms/userDataAtom';
const BrokerCard = ({broker}) => {
  const tw = useTailwind();
  const user = useRecoilValue(userDataAtom);

  const [loading, setLoading] = useState(true);
  const onError = e => {
    setLoading(false);
  };
  const onLoad = () => {
    setLoading(false);
  };
  var formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });

  const handleBrokerConnect = () => {
    if (broker === 'fyers') {
      Linking.openURL(
        `https://api.fyers.in/api/v2/generate-authcode?client_id=AYTMZSV1KA-100&redirect_uri=${MONEY_FACTORY}/api/fyersbroker/redirectUrl&response_type=code&state=${user?.id}`,
      );
    }
    if (broker === 'Angel One') {
      // ToastAndroid.show('Coming Soon!');
      ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT);
      // Linking.openURL(data.link);
    }
    if (broker === '_5paisa') {
      Linking.openURL(
        `https://dev-openapi.5paisa.com/WebVendorLogin/VLogin/Index?VendorKey=NxCsOUlkXM1&ResponseURL=${MONEY_FACTORY}/api/fivepaisabroker/refresh&State=${user?.id}`,
      );
    }
  };
  return (
    <View style={[tw('w-full p-3 bg-[#292e3c] rounded-md my-2')]}>
      <View
        style={[
          tw('flex flex-row items-center pb-2 justify-between'),
          {
            borderBottomWidth: 1,
            borderBottomColor: '#a6b9b8',
          },
        ]}>
        <View style={[tw('flex flex-row items-center'), {}]}>
          {broker === '_5paisa' && <Paisa />}
          {broker === 'fyers' && <Fyers />}
          {broker === 'Angel' && <Angel />}

          <View style={[tw('ml-3')]}>
            <Text
              style={[
                tw('font-bold capitalize'),
                {fontSize: 18, lineHeight: 24, color: Colors.white},
              ]}>
              {broker}
            </Text>
          </View>
        </View>
      </View>
      <View style={[tw(''), {}]}>
        <TouchableOpacity style={[tw(''), {}]} onPress={handleBrokerConnect}>
          <Button title="Reconnect Broker" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BrokerCard;

const styles = StyleSheet.create({
  cardPrice: {fontSize: 16, lineHeight: 22, color: Colors.primary},
});
