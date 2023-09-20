'use client';
import{ persistor, store} from '@/reduxStore/store'
import React from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

const ProviderText = ({children}) => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        {children}
        </PersistGate>
    </Provider>
  )
}

export default ProviderText;