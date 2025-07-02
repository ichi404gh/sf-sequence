import {useAtom} from "jotai";
import clsx from "clsx";

import {sequenceNameAtom, sequenceSummaryAtom} from "../atoms.ts";
import {StepHeader} from "./stepHeader.tsx";
import {steps} from "./stepsData.ts";
import type { StepProps } from "./types.ts";

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