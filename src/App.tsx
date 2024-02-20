import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";

import { useCallback, useState } from "react";

import { BottomToolbar } from "@components/BottomToolbar";
import { Router } from "@components/Router";

import { Tabs } from "@type/enums";
import { TopToolbar } from "./components";
import { SessionContextProvider } from "@providers/SessionContext";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f7f7",
    },
  },
});

function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Main);

  const onChangeTabHandler = useCallback((newTabIndex: number) => {
    setActiveTab(newTabIndex);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SessionContextProvider>
        <CssBaseline />
        <TopToolbar tab={activeTab} />
        <Router activeTab={activeTab} />
        <BottomToolbar onChangeTab={onChangeTabHandler} />
      </SessionContextProvider>
    </ThemeProvider>
  );
}

export default App;
