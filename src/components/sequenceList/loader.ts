import {getSequences} from "../../api/sequence.ts";

export interface SequenceData {
  id: string;
  name: string;
}

export const loader = async () => {
  return await getSequences();
}