import type {LoaderFunction} from "react-router";
import {getSequence} from "../../api/sequence.ts";

export interface SequenceStepData {
  title: string;
  topic: string;
  content: string;
}

export interface SequenceData {
  name: string;
  summary: string;
  steps: SequenceStepData[];
}

export const loader: LoaderFunction = async ({params}) => {
  const {id} = params;
  const sequence = await getSequence(id!);

  return sequence as SequenceData
}

export const newSequenceLoader: LoaderFunction = async () => {
  return {
    id: undefined,
    name: '',
    summary: '',
    steps: [],
  } as SequenceData
}