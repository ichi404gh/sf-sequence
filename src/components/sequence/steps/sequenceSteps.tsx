import {useAtom} from "jotai";

import type {StepProps} from "./types.ts";
import {StepHeader} from "./stepHeader.tsx";
import {steps} from "./stepsDefinition.ts";
import type {SequenceStepData} from "../types.ts";
import {sequenceStepsAtom} from "../atoms.ts";
import {Button} from "../../ui/button.tsx";
import RichTextEditor from "../../ui/richTextEditor.tsx";

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
    <div className="my-2 border-1 border-gray-200 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center">

        <div className="m-4 flex items-center justify-center border border-gray-300 rounded-lg w-10 h-10">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66669 3.83331L5.99489 6.71878C6.24459 6.88525 6.36944 6.96848 6.50452 7.02745C6.62441 7.07979 6.75005 7.11783 6.87883 7.14078C7.02393 7.16665 7.17398 7.16665 7.47409 7.16665H12.526C12.8261 7.16665 12.9761 7.16665 13.1212 7.14078C13.25 7.11783 13.3756 7.07979 13.4955 7.02745C13.6306 6.96848 13.7555 6.88524 14.0052 6.71878L18.3334 3.83331M5.66669 14.6666H14.3334C15.7335 14.6666 16.4336 14.6666 16.9683 14.3942C17.4387 14.1545 17.8212 13.772 18.0609 13.3016C18.3334 12.7668 18.3334 12.0668 18.3334 10.6666V5.33331C18.3334 3.93318 18.3334 3.23312 18.0609 2.69834C17.8212 2.22793 17.4387 1.84548 16.9683 1.6058C16.4336 1.33331 15.7335 1.33331 14.3334 1.33331H5.66669C4.26656 1.33331 3.56649 1.33331 3.03171 1.6058C2.56131 1.84548 2.17885 2.22793 1.93917 2.69834C1.66669 3.23312 1.66669 3.93318 1.66669 5.33331V10.6666C1.66669 12.0668 1.66669 12.7668 1.93917 13.3016C2.17885 13.772 2.56131 14.1545 3.03171 14.3942C3.56649 14.6666 4.26656 14.6666 5.66669 14.6666Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <input
          type="text"
          placeholder="Title"
          value={value.title}
          onChange={(e) => setValue({title: e.target.value})}
          className="font-semibold text-lg ps-2 pe-4 me-2 py-2.5 flex-1"
        />

      </div>
      <div className="border-t border-b border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Topic"
          value={value.topic}
          onChange={(e) => setValue({topic: e.target.value})}
          className="px-4 py-2.5 flex-1"
        />
      </div>
      <div className="p-4">
        <RichTextEditor placeholder="Content..." initialContent={value.content} onUpdate={content => setValue({content})}/>
      </div>
    </div>
  )
}

