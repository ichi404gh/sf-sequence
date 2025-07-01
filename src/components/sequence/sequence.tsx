import {useLoaderData} from "react-router";
import type {SequenceData} from "./loader.tsx";
import {Step, Stepper} from "../stepper.tsx";
import {useState} from "react";


export function Sequence() {
  const data = useLoaderData<SequenceData>();
  const [step, setStep] = useState(1);
  return (
    <>
      <div>
        <Stepper>
          <Step
            title="Name & Product"
            description="Provide sequence name & product"
            completed={step > 0}
            active={step >= 0}
          />
          <Step
            title="Sequence steps"
            description="Create sequence steps for your sequence"
            completed={step > 1}
            active={step >= 1}
          />
          <Step
            title="Summary"
            description="Summary of your sequence"
            completed={step > 2}
            active={step >= 2}
          />
        </Stepper>
      </div>
      <div>
        {JSON.stringify(data)}
      </div>
    </>
  )

}