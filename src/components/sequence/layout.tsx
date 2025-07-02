import {Outlet} from "react-router";
import {useAtomValue} from "jotai";

import {sequenceNameAtom} from "./atoms.ts";


export function Layout() {
  const name = useAtomValue(sequenceNameAtom);
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold">{name || "New Sequence"}</h2>
      <Outlet/>
    </div>
  )
}
