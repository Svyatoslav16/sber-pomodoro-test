import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { ISessionContext, SessionContext } from "./context";
import { SessionType } from "@type/enums";

export const SessionContextProvider = ({ children }: PropsWithChildren) => {
  const [sessionCount, setSessionCount] = useState(5);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [sessionType, setSessionType] = useState(SessionType.Work);

  const changeSessionCount = useCallback((count: number) => {
    setSessionCount(count);
  }, []);
  const changeWorkMinutes = useCallback((minutes: number) => {
    setWorkMinutes(minutes);
  }, []);
  const changeShortBreak = useCallback((minutes: number) => {
    setShortBreak(minutes);
  }, []);
  const changeLongBreak = useCallback((minutes: number) => {
    setLongBreak(minutes);
  }, []);
  const changeSessionType = useCallback((minutes: number) => {
    setSessionType(minutes);
  }, []);

  const resetSession = useCallback(() => {
    setSessionCount(5);
    setWorkMinutes(25);
    setShortBreak(5);
    setLongBreak(15);
    setSessionType(SessionType.Work);
  }, []);

  const contextValue = useMemo(
    (): ISessionContext => ({
      sessionCount,
      workMinutes,
      shortBreak,
      longBreak,
      sessionType,
      changeSessionCount,
      changeWorkMinutes,
      changeShortBreak,
      changeLongBreak,
      changeSessionType,
      resetSession,
    }),
    [
      changeLongBreak,
      changeSessionCount,
      changeSessionType,
      changeShortBreak,
      changeWorkMinutes,
      resetSession,
      longBreak,
      sessionCount,
      sessionType,
      shortBreak,
      workMinutes,
    ]
  );

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
