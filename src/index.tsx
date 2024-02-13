import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/pages/App'
import { HashRouter } from 'react-router-dom'
import { Inspector } from 'react-dev-inspector'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import configureStore from '@/redux/store'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import '@/assets/styles/css/tw.css'
import '@/assets/styles/css/index.css'
import appCombineReducers from '@/redux/reducer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const store = configureStore(appCombineReducers)
const InspectorWrapper = IS_DEVELOPMENT ? Inspector : React.Fragment
//选中要审查的元素， 按住ctrl+command+shfit+c
root.render(
  <InspectorWrapper>
    <HelmetProvider>
      <React.StrictMode>
        <Provider store={store}>
          <HashRouter>
            <Suspense>
              <App />
            </Suspense>
          </HashRouter>
        </Provider>
      </React.StrictMode>
    </HelmetProvider>
  </InspectorWrapper>,
)
