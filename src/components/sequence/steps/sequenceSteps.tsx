import {useAtom} from "jotai";

import type {StepProps} from "./types.ts";
import {StepHeader} from "./stepHeader.tsx";
import {steps} from "./stepsData.ts";
import type {SequenceStepData} from "../types.ts";
import {sequenceStepsAtom} from "../atoms.ts";
import {Button} from "../../ui/button.tsx";

const newStep: SequenceStepData = {
  title: '',
  topic: '',
  content: '',
};

export function SequenceSteps(props: StepProps) {
  const [sequenceSteps, setSequenceSteps] = useAtom(sequenceStepsAtom);

  function addStep() {
    setSequenceSteps(steps => [...steps, {...newStep}])
  }

  return (
    <>
      <StepHeader
        onPrev={props.onPrev}
        onNext={props.onNext}
        canGoNext={true}
        canGoPrev={true}
        name={steps[1].title}
        description={steps[1].description}
      />

      {sequenceSteps.map((step, index) => (
        <Step
          key={step.id ?? index}
          index={index}
        />
      ))}
      <div className="flex justify-center">
        <Button outline small onClick={addStep}>+ Add new step</Button>
      </div>


    </>
  );
}


function Step({index}: { index: number }) {
  const [sequenceSteps, setSequenceSteps] = useAtom(sequenceStepsAtom);
  const value = sequenceSteps[index];
  const setValue = (value: Partial<SequenceStepData>) => {
    setSequenceSteps(prev => {
      const steps = prev.slice();
      steps[index] = {...steps[index], ...value};
      return steps;
    });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={value.title}
        onChange={(e) => setValue({title: e.target.value})}
      />
      <input
        type="text"
        placeholder="topic"
        value={value.topic}
        onChange={(e) => setValue({topic: e.target.value})}
      />
      <textarea value={value.content} onChange={(e) => setValue({content: e.target.value})}/>
    </div>
  )
}