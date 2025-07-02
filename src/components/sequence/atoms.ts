import {atom} from "jotai";
import type {SequenceStepData} from "./types.ts";

export const sequenceNameAtom = atom("New sequence");
export const sequenceSummaryAtom = atom("");
export const sequenceStepsAtom = atom<SequenceStepData[]>([]);