import {useRouteError} from "react-router";

export function Error() {
  const error = useRouteError();
  console.error(error);


  if (hasStatus(error) && error.status === 404) {
    return (<div>
      <h3>Not Found</h3>
      <p>Sequence with provided id does not exist</p>
    </div>);
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{JSON.stringify(error)}</i>
      </p>
    </div>
  )
}

function hasStatus(obj: unknown): obj is {status: number} {
  return typeof obj === 'object' && obj !== null && 'status' in obj;
}