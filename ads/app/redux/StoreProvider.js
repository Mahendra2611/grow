'use client'
import { makeStore } from "./Store.js"
import { Provider } from "react-redux"

export default function Providers({ children }) {
    return <Provider store={makeStore()}>
      {children}
    </Provider>
  }
  