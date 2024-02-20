import { Box } from "@mui/material";
import { Tabs } from "@type/enums";
import { MainTab, SettingsTab, StatisticsTab, TasksTab } from "./tabs";

interface RouterProps {
  activeTab: Tabs;
}

// TODO: переделать на BottomNavigation
export const Router = ({ activeTab }: RouterProps) => {
  return (
    <Box>
      {activeTab === Tabs.Main && <MainTab />}
      {activeTab === Tabs.Tasks && <TasksTab />}
      {activeTab === Tabs.Statistics && <StatisticsTab />}
      {activeTab === Tabs.Settings && <SettingsTab />}
    </Box>
  );
};
