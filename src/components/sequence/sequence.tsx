import {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {useSetAtom} from "jotai";

import {Step, Stepper} from "../stepper.tsx";
import {sequenceNameAtom, sequenceStepsAtom, sequenceSummaryAtom} from "./atoms.ts";
import {steps} from "./steps/stepsDefinition.ts";
import type {SequenceData} from "./types.ts";


export function Sequence() {
  const data = useLoaderData<SequenceData>();
  const [step, setStep] = useState(0);

  const setSequenceName = useSetAtom(sequenceNameAtom);
  const setSequenceSummary = useSetAtom(sequenceSummaryAtom);
  const setSequenceSteps = useSetAtom(sequenceStepsAtom);

  useEffect(() => {
    setSequenceName(() => data.name);
    setSequenceSummary(() => data.summary);
    setSequenceSteps(() => data.steps);
  }, [data, setSequenceName, setSequenceSummary, setSequenceSteps]);

  const ActiveStepComponent = steps[step].component;

  return (
    <>
      <div className="my-4">
        <Stepper>
          {steps.map((stepDefinition, index) => (
            <Step
              key={index}
              title={stepDefinition.stepperTitle}
              description={stepDefinition.description}
              index={index}
              step={step}
            />
          ))}
        </Stepper>
      </div>

      <ActiveStepComponent
        onPrev={() => setStep(step - 1)}
        onNext={() => setStep(step + 1)}
      />
    </>
  );
}
