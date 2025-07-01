import {NavLink, useLoaderData} from "react-router";
import type {SequenceData} from "./loader.ts";


export function SequenceList() {
  const sequences: SequenceData[] = useLoaderData<SequenceData[]>();

  return (
    <>
      <div>
        <NavLink to="/sequence/new">Create New</NavLink>
      </div>
      {sequences.map(sequence => (
        <div key={sequence.id}>
          <NavLink to={`/sequence/${sequence.id}`}>{sequence.name}</NavLink>
        </div>
      ))}
      {sequences.length === 0 && <div>No sequences</div>}
    </>
  )
}