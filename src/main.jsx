import { Provider } from "./components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Theme } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <ColorModeProvider forcedTheme="light">
        <Provider>
        <Theme appearance="light">
    <App />
    </Theme>
    </Provider>
    </ColorModeProvider>

  
  </StrictMode>,
)
