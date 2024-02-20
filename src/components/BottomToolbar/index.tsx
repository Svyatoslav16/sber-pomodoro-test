import { useCallback } from "react";

import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";

import UpdateIcon from "@mui/icons-material/Update";
import ListIcon from "@mui/icons-material/List";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import { Tabs } from "@type/enums";

export interface BottomToolbar {
  onChangeTab(tabIndex: number): void;
}

export const BottomToolbar = ({ onChangeTab }: BottomToolbar) => {
  const mainTabChangeHandler = useCallback(() => {
    onChangeTab(Tabs.Main);
  }, [onChangeTab]);
  const tasksTabChangeHandler = useCallback(() => {
    onChangeTab(Tabs.Tasks);
  }, [onChangeTab]);
  const statisticsTabChangeHandler = useCallback(() => {
    onChangeTab(Tabs.Statistics);
  }, [onChangeTab]);
  const settingsTabChangeHandler = useCallback(() => {
    onChangeTab(Tabs.Settings);
  }, [onChangeTab]);

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <IconButton color="inherit" onClick={mainTabChangeHandler}>
              <UpdateIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" onClick={tasksTabChangeHandler}>
              <ListIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" onClick={statisticsTabChangeHandler}>
              <AssessmentIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" onClick={settingsTabChangeHandler}>
              <SettingsIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
