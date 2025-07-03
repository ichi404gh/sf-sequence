import {createBrowserRouter} from "react-router";

import {SequenceList} from "./components/sequenceList/sequenceList.tsx";
import {loader as sequenceListLoader} from "./components/sequenceList/loader.ts";
import {Layout} from "./components/layout.tsx";

import {Sequence} from "./components/sequence/sequence.tsx";
import {loader as sequenceLoader, newSequenceLoader} from "./components/sequence/loader.ts";
import {Error} from "./components/sequence/error.tsx";
import {Layout as SequenceLayout} from "./components/sequence/layout.tsx";


export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: SequenceList,
        loader: sequenceListLoader,
      },
      {
        path: "sequence",
        Component: SequenceLayout,
        children: [
          {
            path: "new",
            Component: Sequence,
            loader: newSequenceLoader,
            handle: {
              breadcrumb: 'Sequence',
            },
          },
          {
            path: ":id",
            Component: Sequence,
            loader: sequenceLoader,
            handle: {
              breadcrumb: 'Sequence',
            },
          }
        ]
      }
    ]
  },
  {}
]);
