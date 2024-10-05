import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { BlueSpacing20 } from '../../BlueComponents';
import { MultisigHDWallet } from '../../class';
import { BottomModalHandle } from '../../components/BottomModal';
import Button from '../../components/Button';
import SafeArea from '../../components/SafeArea';
import { useTheme } from '../../components/themes';
import loc from '../../loc';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useExtendedNavigation } from '../../hooks/useExtendedNavigation';
import { AddAccountStackParamList } from '../navigation/OnboardingStack';

type NavigationProps = NativeStackNavigationProp<AddAccountStackParamList, 'Welcome'>;

const M = 2;
const N = 3;

const Welcome: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useExtendedNavigation<NavigationProps>();
  const walletLabel = '53536-0';
  const bottomModalRef = useRef<BottomModalHandle>(null);

  const stylesHook = StyleSheet.create({
    root: {
      backgroundColor: colors.elevated,
      justifyContent: 'space-between',
      flex: 1,
    },
    textdesc: {
      color: colors.alternativeTextColor,
    },
  });

  const onLetsStartPress = () => {
    bottomModalRef.current?.dismiss();
    navigate('WalletsAddMultisigStep', { m: M, n: N, format: MultisigHDWallet.FORMAT_P2WSH, walletLabel });
  };

  return (
    <SafeArea style={stylesHook.root}>
      <View style={styles.descriptionContainer}>
        <View style={styles.imageWrapper}>
          <LottieView source={require('../../img/msvault.json')} style={styles.lottie} autoPlay loop={false} />
        </View>

        <BlueSpacing20 />
        <Text style={[styles.textdesc, stylesHook.textdesc]}>
          {loc.multisig.what_is_vault}
          <Text style={[styles.textdescBold, stylesHook.textdesc]}>
            {loc.formatString(loc.multisig.what_is_vault_numberOfWallets, { m: M, n: N })}
          </Text>
          <Text style={[styles.textdesc, stylesHook.textdesc]}>{loc.multisig.what_is_vault_wallet}</Text>
        </Text>

        <BlueSpacing20 />

        <Text style={[styles.textdesc, stylesHook.textdesc]}>
          {loc.multisig.needs}
          <Text style={[styles.textdescBold, stylesHook.textdesc]}>
            {loc.formatString(loc.multisig.what_is_vault_description_number_of_vault_keys, { m: M })}
          </Text>
          <Text style={[styles.textdesc, stylesHook.textdesc]}>
            {M === 2 && N === 3 ? loc.multisig.what_is_vault_description_to_spend : loc.multisig.what_is_vault_description_to_spend_other}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          testID="LetsStart"
          buttonTextColor={colors.buttonAlternativeTextColor}
          title={loc.multisig.lets_start}
          onPress={onLetsStartPress}
        />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 0.8,
  },
  buttonContainer: {
    padding: 24,
  },
  textdesc: {
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textdescBold: {
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  lottie: {
    width: 233,
    height: 176,
  },
  imageWrapper: {
    borderWidth: 0,
    alignItems: 'center',
  },
});

export default Welcome;
