import {
  Box,
  List,
  ListItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ListSelect } from "./components/ListSelect";
import { focusTimes, longBreakTimes, shortBreakTimes } from "./constants";
import { useCallback, useContext } from "react";
import { SessionContext } from "@providers/SessionContext";

export const SettingsTab = () => {
  const {
    workMinutes,
    shortBreak,
    longBreak,
    changeWorkMinutes,
    changeShortBreak,
    changeLongBreak,
  } = useContext(SessionContext);

  const changeWorkMinutesHandler = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const value = event.target.value;
      if (value && Number.isInteger(+value)) {
        // TODO: какая-то дичь компилятора, показывает объект вместо числа после проверки
        changeWorkMinutes(+value);
      }
    },
    [changeWorkMinutes]
  );
  const changeShortBreakHandler = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const value = event.target.value;
      if (value && Number.isInteger(+value)) {
        // TODO: какая-то дичь компилятора, показывает объект вместо числа после проверки
        changeShortBreak(+value);
      }
    },
    [changeShortBreak]
  );
  const changeLongBreakHandler = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const value = event.target.value;
      if (value && Number.isInteger(+value)) {
        // TODO: какая-то дичь компилятора, показывает объект вместо числа после проверки
        changeLongBreak(+value);
      }
    },
    [changeLongBreak]
  );

  return (
    <Box>
      <Box>
        <Typography variant="h6" textAlign="left">
          Duration Setting
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            borderRadius: "8px",
          }}
        >
          <ListItem>
            <ListSelect
              id="pomodoro-time"
              label="Pomodoro"
              value={workMinutes}
              values={focusTimes}
              onChange={changeWorkMinutesHandler}
              sx={{
                width: "100px",
              }}
            />
          </ListItem>
          <ListItem>
            <ListSelect
              id="short-break"
              label="Short break"
              value={shortBreak}
              values={shortBreakTimes}
              onChange={changeShortBreakHandler}
              sx={{
                width: "100px",
              }}
            />
          </ListItem>
          <ListItem>
            <ListSelect
              id="long-break"
              label="Long break"
              value={longBreak}
              values={longBreakTimes}
              onChange={changeLongBreakHandler}
              sx={{
                width: "100px",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
