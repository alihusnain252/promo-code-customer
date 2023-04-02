import 'react-native-gesture-handler';
import React from 'react';
import {RouterComponents} from '@navigation/routerComponents';
import {Provider} from 'react-redux';
import store from '@redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterComponents />
      </PersistGate>
    </Provider>
  );
};

export default App;
