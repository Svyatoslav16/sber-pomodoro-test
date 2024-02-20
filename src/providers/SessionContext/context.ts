import { SessionType } from "@type/enums";
import { createContext } from "react";

export interface ISessionContext {
  sessionCount: number;
  workMinutes: number;
  shortBreak: number;
  longBreak: number;
  sessionType: SessionType;
  changeSessionCount(count: number): void;
  changeWorkMinutes(minutes: number): void;
  changeShortBreak(minutes: number): void;
  changeLongBreak(minutes: number): void;
  changeSessionType(minutes: number): void;
  resetSession(): void;
}

export const initialSessionContextValue: ISessionContext = {
  sessionCount: 4,
  workMinutes: 25,
  shortBreak: 5,
  longBreak: 15,
  sessionType: SessionType.Work,
  changeSessionCount: () => {},
  changeWorkMinutes: () => {},
  changeShortBreak: () => {},
  changeLongBreak: () => {},
  changeSessionType: () => {},
  resetSession: () => {},
};

export const SessionContext = createContext(initialSessionContextValue);
