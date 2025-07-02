import {useAtom} from "jotai";
import clsx from "clsx";

import {Button} from "../ui/button.tsx";
import {sequenceNameAtom, sequenceSummaryAtom} from "./atoms.ts";
import {steps} from "./stepsData.ts";

interface StepProps {
  onNext: () => void,
  onPrev: () => void,
}

function StepHeader(props: {
  onNext?: () => void,
  onPrev?: () => void,

  canGoNext: boolean,
  canGoPrev: boolean,

  name: string,
  description: string,
}) {
  return <>
    <div className="flex gap-3">
      <div className="flex-1">
        <p className="font-semibold text-lg">{props.name}</p>
        <p className="text-sm">{props.description}</p>
      </div>
      <Button
        outline
        onClick={props.onPrev}
        disabled={!props.canGoPrev}
      >
        Previous
      </Button>
      <Button
        primary
        onClick={props.onNext}
        disabled={!props.canGoNext}
      >
        Next
      </Button>
    </div>

    <hr className="text-gray-200 my-5"/>
  </>
}

export function NameStep(props: StepProps) {

  const [name, setName] = useAtom(sequenceNameAtom);
  const [summary, setSummary] = useAtom(sequenceSummaryAtom);

  return (
    <>
      <StepHeader
        onPrev={props.onPrev}
        onNext={props.onNext}
        canGoNext={!!name && !!summary}
        canGoPrev={false}
        name={steps[0].title}
        description={steps[0].description}
      />

      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name</label>
        <input
          className={clsx("border-1 border-gray-300 rounded-lg px-4 py-2.5", !name && 'border-red-500')}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="summary">Summary</label>
        <input
          className={clsx("border-1 border-gray-300 rounded-lg px-4 py-2.5", !summary && 'border-red-500')}
          type="text"
          name="summary"
          id="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
      </div>
    </>
  );
}

export function SequenceSteps(props: StepProps) {
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
    </>
  );
}

export function SummaryStep(props: StepProps) {
  return (
    <>
      <StepHeader
        onPrev={props.onPrev}
        onNext={props.onNext}
        canGoNext={false}
        canGoPrev={true}
        name={steps[2].title}
        description={steps[2].description}
      />
    </>
  );
}