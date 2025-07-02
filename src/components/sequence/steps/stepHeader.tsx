import {Button} from "../../ui/button.tsx";

export function StepHeader(props: {
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