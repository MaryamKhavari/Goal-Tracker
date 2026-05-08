
// import ReactDOM from "react-dom/client"
// import { BrowserRouter } from "react-router-dom"
// import App from "./App"
// import Providers from "./app/providers"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Providers>
//       <App />
//     </Providers>
//   </BrowserRouter>
// )

import ReactDOM from "react-dom/client"

import {
  BrowserRouter
} from "react-router-dom"

import App from "./App"
import "./i18n/i18n"
import Providers from "./app/providers"

import SettingsProvider
from "./context/SettingsContext"

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <BrowserRouter>

    <SettingsProvider>

      <Providers>

        <App />

      </Providers>

    </SettingsProvider>

  </BrowserRouter>
)