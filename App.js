import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/components/Navigation';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './src/Reducers';
import thunk from 'redux-thunk';

const store = createStore(Reducers, {}, applyMiddleware(thunk));
const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
