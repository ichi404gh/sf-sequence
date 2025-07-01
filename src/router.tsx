import {createBrowserRouter} from "react-router";

import {SequenceList} from "./components/sequenceList/sequenceList.tsx";
import {loader as sequenceListLoader} from "./components/sequenceList/loader.ts";
import {Layout} from "./components/layout.tsx";

import {Sequence} from "./components/sequence/sequence.tsx";
import {loader as sequenceLoader, newSequenceLoader} from "./components/sequence/loader.ts";
import {Error} from "./components/sequence/error.tsx";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: SequenceList,
        loader: sequenceListLoader,
      },
      {
        path: "sequence",
        children: [
          {
            path: "new",
            Component: Sequence,
            loader: newSequenceLoader,
          },
          {
            path: ":id",
            Component: Sequence,
            loader: sequenceLoader,
            ErrorBoundary: Error,
          }
        ]
      }
    ]
  },
  {}
]);
