export interface SequenceStepData {
  id?: string;
  title: string;
  topic: string;
  content: string;
}

export interface SequenceData {
  id?: string;
  name: string;
  summary: string;
  steps: SequenceStepData[];
}