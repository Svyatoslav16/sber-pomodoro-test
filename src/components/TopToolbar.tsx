import { AppBar, Toolbar, Typography } from "@mui/material";
import { Tabs } from "@type/enums";

export interface TopToolbarProps {
  tab: Tabs;
}

const TabName = {
  [Tabs.Main]: "Pomodoro",
  [Tabs.Tasks]: "Tasks",
  [Tabs.Statistics]: "Statistics",
  [Tabs.Settings]: "Settings",
};

export const TopToolbar = ({ tab }: TopToolbarProps) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          {TabName[tab]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
