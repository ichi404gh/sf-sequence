import {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {useSetAtom} from "jotai";

import type {SequenceData} from "./loader.tsx";
import {Step, Stepper} from "../stepper.tsx";
import {sequenceNameAtom, sequenceSummaryAtom} from "./atoms.ts";

import {steps} from "./stepsData.ts";





export function Sequence() {
  const data = useLoaderData<SequenceData>();
  const [step, setStep] = useState(0);

  const setSequenceName = useSetAtom(sequenceNameAtom);
  const setSequenceSummary = useSetAtom(sequenceSummaryAtom);

  useEffect(() => {
    setSequenceName(() => data.name);
    setSequenceSummary(() => data.summary);
  }, [data, setSequenceName, setSequenceSummary]);

  const ActiveStepComponent = steps[step].component;

  return (
    <>
      <div>
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
