import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityPhoneCtx = createContext<VisibilityPhoneProvider | null>(null)

interface VisibilityPhoneProvider {
  setPhoneVisible: (visible: boolean) => void
  visible: boolean
}

export const VisibilityPhoneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setPhoneVisible] = useState(false)

  useNuiEvent<boolean>('setPhoneVisible', setPhoneVisible)

  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Backspace", "Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setPhoneVisible(!visible);
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityPhoneCtx.Provider
      value={{
        visible,
        setPhoneVisible
      }}
    >
    <div id="phone-div" style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
      {children}
    </div>
  </VisibilityPhoneCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityPhoneProvider>(VisibilityPhoneCtx as Context<VisibilityPhoneProvider>)
