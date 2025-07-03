import {Outlet} from "react-router";
import {Breadcrumbs} from "./ui/breadcrumbs.tsx";


export function Layout() {
  return (
    <div className="px-8 py-4">
      <Breadcrumbs/>
      <div className="my-4">
        <Outlet/>
      </div>

    </div>
  )
}