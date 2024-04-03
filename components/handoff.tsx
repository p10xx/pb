import React, { useContext } from 'react';
// @ts-ignore: react-native-handoff is not in the type definition
import Handoff from 'react-native-handoff';
import { BlueStorageContext } from '../blue_modules/storage-context';

interface HandoffComponentProps {
  url?: string;
  title?: string;
  type: (typeof HandOffComponent.activityTypes)[keyof typeof HandOffComponent.activityTypes];
  userInfo?: object;
}

interface HandoffComponentWithActivityTypes extends React.FC<HandoffComponentProps> {
  activityTypes: {
    ReceiveOnchain: string;
    Xpub: string;
    ViewInBlockExplorer: string;
  };
}

const HandOffComponent: HandoffComponentWithActivityTypes = props => {
  const { isHandOffUseEnabled } = useContext(BlueStorageContext);

  if (isHandOffUseEnabled) {
    return <Handoff {...props} />;
  }
  return null;
};

const activityTypes = {
  ReceiveOnchain: 'io.bluewallet.bluewallet.receiveonchain',
  Xpub: 'io.bluewallet.bluewallet.xpub',
  ViewInBlockExplorer: 'io.bluewallet.bluewallet.blockexplorer',
};

HandOffComponent.activityTypes = activityTypes;

export default HandOffComponent;
