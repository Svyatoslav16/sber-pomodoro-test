import { useCallback, useContext, useEffect, useState } from "react";

import { SessionType } from "@type/enums";
import { decreaseTimer } from "@utils/date";
import { SessionContext } from "@providers/SessionContext";

export const useSessionSettings = () => {
  const {
    sessionCount: initialSessionCount,
    workMinutes,
    shortBreak,
    longBreak,
    resetSession,
  } = useContext(SessionContext);

  const [sessionStart, setSessionStart] = useState(false);
  const [sessionDone, setSessionDone] = useState(true);
  const [sessionType, setSessionType] = useState(SessionType.Work);

  const [initialSessionMinuteTime, setInitialSessionMinuteTime] =
    useState(workMinutes);
  const [sessionMinuteTime, setSessionMinuteTime] = useState(
    initialSessionMinuteTime
  );
  const [sessionSecondsTime, setSessionSecondsTime] = useState(0);

  const [sessionCount, setSessionCount] = useState(initialSessionCount);

  const startCurrentSession = useCallback(() => {
    setSessionStart(true);
  }, []);
  const stopCurrentSession = useCallback(() => {
    setSessionStart(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sessionStart) {
        const { minutes, seconds } = decreaseTimer(
          sessionMinuteTime,
          sessionSecondsTime
        );
        setSessionMinuteTime(minutes);
        setSessionSecondsTime(seconds);
      }
    }, 1000);

    if (sessionStart) {
      setSessionDone(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [sessionStart, sessionMinuteTime, sessionSecondsTime]);

  useEffect(() => {
    if (sessionMinuteTime === 0 && sessionSecondsTime === 0) {
      // TODO: звук

      setSessionType((prevSessionType) => {
        let newSessionType = SessionType.Work;

        if (
          initialSessionCount !== sessionCount &&
          (initialSessionCount - sessionCount) % 4 === 0 &&
          prevSessionType === SessionType.Work
        ) {
          newSessionType = SessionType.LongBreak;
        }
        if (prevSessionType === SessionType.Work) {
          newSessionType = SessionType.Break;
        }

        if (newSessionType === SessionType.Work) {
          setSessionMinuteTime(workMinutes);
          setInitialSessionMinuteTime(workMinutes);
          setSessionSecondsTime(0);

          setSessionCount((prevCount) => {
            const nextCount = prevCount - 1;
            if (nextCount < 1) {
              setSessionDone(true);
              setSessionStart(false);
            }

            return nextCount;
          });
        } else if (newSessionType === SessionType.Break) {
          setSessionMinuteTime(shortBreak);
          setInitialSessionMinuteTime(shortBreak);
          setSessionSecondsTime(0);
        } else if (newSessionType === SessionType.LongBreak) {
          setSessionMinuteTime(longBreak);
          setInitialSessionMinuteTime(longBreak);
          setSessionSecondsTime(0);
        }

        return newSessionType;
      });
    }
  }, [
    initialSessionCount,
    longBreak,
    sessionCount,
    sessionMinuteTime,
    sessionSecondsTime,
    sessionType,
    shortBreak,
    workMinutes,
  ]);

  return {
    initialSessionMinuteTime,
    sessionMinuteTime,
    sessionSecondsTime,
    sessionCount,
    shortBreak,
    longBreak,
    sessionStart,
    sessionDone,
    sessionType,
    startCurrentSession,
    stopCurrentSession,
    resetSession,
  };
};
