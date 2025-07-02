import type {StepProps} from "./types.ts";
import {StepHeader} from "./stepHeader.tsx";
import {steps} from "./stepsData.ts";

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