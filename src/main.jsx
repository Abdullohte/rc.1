import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
react({ jsxImportSource: '@emotion/react' })
react({ tsDecorators: true })
react({ plugins: [['@swc/plugin-styled-components', {}]] })
react({ devTarget: 'es2022' })
react({
  parserConfig(id) {
    if (id.endsWith('.res')) return { syntax: 'ecmascript', jsx: true }
    if (id.endsWith('.ts')) return { syntax: 'typescript', tsx: false }
  },
})
react({ reactRefreshHost: 'http://localhost:3000' })
react({
  useAtYourOwnRisk_mutateSwcOptions(options) {
    options.jsc.parser.decorators = true
    options.jsc.transform.decoratorVersion = '2022-03'
  },
})