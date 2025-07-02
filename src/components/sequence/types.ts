export interface SequenceStepData {
  id?: string;
  title: string;
  topic: string;
  content: string;
}

export interface SequenceData {
  name: string;
  summary: string;
  steps: SequenceStepData[];
}