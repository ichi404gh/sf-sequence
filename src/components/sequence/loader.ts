import type {LoaderFunction} from "react-router";

import {getSequence} from "../../api/sequence.ts";
import type {SequenceData} from "./types.ts";

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