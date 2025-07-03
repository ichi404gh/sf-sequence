import {useCallback} from "react";
import {useAtomValue} from "jotai";

import type {StepProps} from "./types.ts";
import {StepHeader} from "./stepHeader.tsx";
import {sequenceNameAtom, sequenceStepsAtom, sequenceSummaryAtom} from "../atoms.ts";
import type {SequenceData, SequenceStepData} from "../types.ts";
import {steps} from "./stepsDefinition.ts";
import {useLoaderData, useNavigate} from "react-router";
import {createSequence, updateSequence} from "../../../api/sequence.ts";


export function SummaryStep(props: StepProps) {
  const name = useAtomValue(sequenceNameAtom);
  const summary = useAtomValue(sequenceSummaryAtom);
  const stepsData = useAtomValue(sequenceStepsAtom);
  const navigate = useNavigate()

  const {id} = useLoaderData<SequenceData>();

  const handleNext = useCallback(async () => {
    const sequence = {
      name,
      summary,
      steps: stepsData,
    };

    if (id) {
      await updateSequence(id, sequence);
    } else {
      await createSequence(sequence);
    }
    navigate('/');

  }, [name, summary, stepsData, id, navigate]);

  return (
    <>
      <StepHeader
        onPrev={props.onPrev}
        onNext={handleNext}
        canGoNext={true}
        canGoPrev={true}
        name={steps[2].title}
        description={steps[2].description}
      />
      <p className="font-semibold">
        Sequence steps and details
      </p>
      <div className="flex gap-2 flex-wrap py-4">
        {stepsData.map((step, index) => <StepCard key={step.id ?? index} step={step}/>)}
      </div>
    </>
  );
}

function StepCard({step}: { step: SequenceStepData }) {
  return (
    <div className="border-1 border-gray-200 rounded-xl overflow-hidden inline-block p-4 w-sm">
      <p className="font-semibold">
        {step.title}
      </p>
      <p>Subject: {step.topic}</p>
      <p
        className="overflow-ellipsis whitespace-nowrap overflow-hidden">Content: {step.content.replace(/(<([^>]+)>)/gi, " ").substring(0, 128)}</p>
    </div>
  )
}