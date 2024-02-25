import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'

import App from '@/pages/App'
import { HashRouter } from 'react-router-dom'
import { Inspector } from 'react-dev-inspector'
import { HelmetProvider } from 'react-helmet-async'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import '@/assets/styles/css/tw.css'
import '@/assets/styles/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const InspectorWrapper = IS_DEVELOPMENT ? Inspector : React.Fragment
//选中要审查的元素， 按住ctrl+command+shfit+c
root.render(
  <InspectorWrapper>
    <HelmetProvider>
      <React.StrictMode>
        <HashRouter>
          <Suspense>
            <SWRConfig
              value={{
                refreshInterval: 5000,
              }}
            >
              <App />
            </SWRConfig>
          </Suspense>
        </HashRouter>
      </React.StrictMode>
    </HelmetProvider>
  </InspectorWrapper>,
)
