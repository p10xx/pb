import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import navigationStyle, { CloseButtonPosition } from '../../components/navigationStyle';
import { useTheme } from '../../components/themes';
import loc from '../../loc';
import { WelcomeComponent, WalletsAddMultisigComponent } from './LazyLoadAddAccountStack';
import { Text, View } from 'react-native';
import { BlueButtonLink, BlueFormLabel, BlueSpacing20, BlueSpacing40, BlueText } from '../../BlueComponents';
import Button from '../../components/Button';

// import {
//   ImportCustomDerivationPathComponent,
//   ImportSpeedComponent,
//   ImportWalletComponent,
//   ImportWalletDiscoveryComponent,
//   PleaseBackupComponent,
//   PleaseBackupLNDHubComponent,
//   ProvideEntropyComponent,
//   WalletsAddMultisigComponent,
//   WalletsAddMultisigHelpComponent,
//   WalletsAddMultisigStep2Component,
// } from '../../navigation/LazyLoadAddWalletStack';

export type AddAccountStackParamList = {
  // ImportWallet: undefined;
  // ImportWalletDiscovery: undefined;
  // ImportSpeed: undefined;
  // ImportCustomDerivationPath: undefined;
  // PleaseBackup: undefined;
  // PleaseBackupLNDHub: undefined;
  // ProvideEntropy: undefined;
  Welcome: undefined;
  WalletsAddMultisigStep: {
    m: number;
    n: number;
    walletLabel: string;
    format: string;
  };
  // WalletsAddMultisigHelp: undefined;
};

const Stack = createNativeStackNavigator<AddAccountStackParamList>();

const OnboardingStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* <Stack.Screen name="ImportCustomDerivationPath" component={ImportCustomDerivationPathComponent} />
      <Stack.Screen
        name="ImportWallet"
        component={ImportWalletComponent}
        options={navigationStyle({ title: loc.wallets.import_title })(theme)}
      />
      <Stack.Screen
        name="ImportSpeed"
        component={ImportSpeedComponent}
        options={navigationStyle({ statusBarStyle: 'light', title: loc.wallets.import_title })(theme)}
      />
      <Stack.Screen
        name="ImportWalletDiscovery"
        component={ImportWalletDiscoveryComponent}
        options={navigationStyle({
          title: loc.wallets.import_discovery_title,
        })(theme)}
      />
      <Stack.Screen
        name="PleaseBackup"
        component={PleaseBackupComponent}
        options={navigationStyle({
          gestureEnabled: false,
          headerBackVisible: false,
          title: loc.pleasebackup.title,
        })(theme)}
      />
      <Stack.Screen
        name="PleaseBackupLNDHub"
        component={PleaseBackupLNDHubComponent}
        options={navigationStyle({ gestureEnabled: false, headerBackVisible: false, title: loc.pleasebackup.title })(theme)}
      />
      <Stack.Screen
        name="ProvideEntropy"
        component={ProvideEntropyComponent}
        options={navigationStyle({ title: loc.entropy.title })(theme)}
      />
      */}
      <Stack.Screen
        name="Welcome"
        component={WelcomeComponent}
        options={navigationStyle({ title: '', headerBackVisible: false, headerShown: false })(theme)}
      />

      <Stack.Screen
        name="WalletsAddMultisigStep"
        component={WalletsAddMultisigComponent}
        options={navigationStyle({ title: '', gestureEnabled: false })(theme)}
      />
      {/*
      <Stack.Screen
        name="WalletsAddMultisigHelp"
        component={WalletsAddMultisigHelpComponent}
        options={navigationStyle({
          title: '',
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#0070FF',
          },
          headerTintColor: '#FFFFFF',
          headerBackTitleVisible: false,
          statusBarStyle: 'light',
          headerShadowVisible: false,
        })(theme)}
      /> */}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
