import { Box, CircularProgress, IconButton, Typography } from "@mui/material";

import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSessionSettings } from "@hooks/useSessionSettings";
import { useMemo } from "react";
import { formatNumberLess9 } from "./utils";
import { SessionType } from "@type/enums";

const SECONDS_IN_MINUTE = 60;

const DescriptionSessionType = {
  [SessionType.Work]: "Concentrate",
  [SessionType.Break]: "Short break",
  [SessionType.LongBreak]: "Long Break",
};

export const MainTab = () => {
  const {
    initialSessionMinuteTime,
    sessionMinuteTime,
    sessionSecondsTime,
    sessionStart,
    sessionType,
    startCurrentSession,
    stopCurrentSession,
    resetSession,
  } = useSessionSettings();

  const progress = useMemo(
    () =>
      100 -
      Math.round(
        ((initialSessionMinuteTime * SECONDS_IN_MINUTE -
          (sessionMinuteTime * SECONDS_IN_MINUTE + sessionSecondsTime)) /
          SECONDS_IN_MINUTE /
          initialSessionMinuteTime) *
          100
      ),
    [initialSessionMinuteTime, sessionMinuteTime, sessionSecondsTime]
  );

  return (
    <>
      <Box position="relative" height="8rem">
        <Box>
          <Typography variant="h3" gutterBottom marginBottom="0">
            {formatNumberLess9(sessionMinuteTime)}:
            {formatNumberLess9(sessionSecondsTime)}
          </Typography>
          <Typography gutterBottom>
            {DescriptionSessionType[sessionType]}
          </Typography>
        </Box>
        <Box position="absolute" left="-3rem" top="-4rem">
          <CircularProgress
            variant="determinate"
            // FIXME: появляется NaN в момент переключения типа сессии
            value={progress}
            size="13rem"
          />
        </Box>
      </Box>
      <Box marginTop="1rem">
        <IconButton
          color="inherit"
          onClick={sessionStart ? stopCurrentSession : startCurrentSession}
        >
          {sessionStart ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton color="inherit" onClick={resetSession}>
          <ReplayIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
};
