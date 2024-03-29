"use client";

import IntelliAI from "@/utils/IntelliAI";
import { ReactNode, createContext, useContext, useRef, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProviderValue {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  getResponse: (prompt: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  response: any;
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  emptyResponse: () => void;
  error: string | null;
  setCourseContentInfo: (
    subject: string,
    duration: string,
    level: string
  ) => void;
  courseContent: {
    subject: string;
    duration: string;
    level: string | undefined;
  };
  setError: (error: string | null) => void;
  apiSidebartoggle: boolean;
  setApiSidebartoggle: (apiSidebartoggle: boolean) => void;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  pricingRef: React.RefObject<HTMLDivElement> | null;
}

const AppContext = createContext<ContextProviderValue | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [toggle, setToggle] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [courseContent, setCourseContent] = useState({
    subject: "",
    duration: "",
    level: "",
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [apiSidebartoggle, setApiSidebartoggle] = useState<boolean>(false);

  const getResponse = async (prompt: string) => {
    const userId =
      typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
    try {
      setLoading(true);
      const query = { prompt, userId };
      const result = await IntelliAI(query);
      if (result.success) {
        setResponse(result.response);
        setLoading(false);
        setError(null);
      } else {
        setError(result.response);
        setLoading(false);
      }
    } catch (error) {
      setError(`${error}`);
      setLoading(false);
    }
  };

  const setCourseContentInfo = (
    subject: string,
    duration: string,
    level: string
  ) => {
    setCourseContent({
      subject,
      duration,
      level,
    });
  };

  const emptyResponse = () => {
    setResponse(null);
  };

  const value: ContextProviderValue = {
    toggle,
    setToggle,
    loading,
    setLoading,
    response,
    setResponse,
    getResponse,
    emptyResponse,
    error,
    setCourseContentInfo,
    courseContent,
    setError,
    apiSidebartoggle,
    setApiSidebartoggle,
    aboutRef,
    pricingRef,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useWebContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useWebContext must be used within an AppContext");
  }

  return context;
};
