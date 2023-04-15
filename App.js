import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {RouterComponents} from '@navigation/routerComponents';
import {Provider} from 'react-redux';
import store from '@redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import { requestUserPermission,notificationListener } from '@utils';
let persistor = persistStore(store);
const App = () => {


  useEffect(() => {
   requestUserPermission()
   notificationListener()
  }, [])
  

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterComponents />
      </PersistGate>
    </Provider>
  );
};

export default App;
