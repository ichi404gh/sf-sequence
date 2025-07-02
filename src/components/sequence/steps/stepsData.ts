import {NameStep} from "./nameStep.tsx";
import {SequenceSteps} from "./sequenceSteps.tsx";
import {SummaryStep} from "./summaryStep.tsx";

export const steps = [
  {
    title: 'Sequence Name & Product',
    stepperTitle: 'Name & Product',
    description: 'Provide sequence name & product',
    component: NameStep,
  },
  {
    title: 'Sequence steps',
    stepperTitle: 'Sequence steps',
    description: 'Create sequence steps for your sequence',
    component: SequenceSteps,
  },
  {
    title: 'Sequence Summary',
    stepperTitle: 'Summary',
    description: 'Summary of your sequence',
    component: SummaryStep,
  }
];