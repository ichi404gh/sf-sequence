import React from "react";
import clsx from 'clsx';

interface StepData {
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
}

export function Stepper({children}: { children: React.ReactNode[] }) {
  return (
    <ul className="relative flex flex-col md:flex-row">
      {children}
    </ul>

  )
}

export function Step({title, description, active, completed}: StepData) {
  return (
    <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
      <div
        className="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
        <div className="md:flex-1">
          <div className={clsx("group-first:hidden  md:w-full md:h-px", active ? 'bg-[#6E40D7]' : 'bg-[#EAECF0]')}/>
        </div>
        <span
          className={clsx(
            "size-6 flex justify-center items-center shrink-0 bg-[#F9F5FF] border-[1.5px] rounded-full",
            active ? 'border-[#6E40D7]' : 'border-[#EAECF0]',
          )}>
           {completed ? (
             <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd"
                     d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                     fill={active ? "#6E40D7" : "#EAECF0"}/>
             </svg>
           ) : (
             <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4.5" cy="4" r="4" fill={active ? "#6E40D7" : "#EAECF0"}/>
             </svg>
           )}
      </span>
        <div className="md:flex-1 w-px h-full  md:w-full md:h-px">
          <div
            className={clsx(" w-px h-full  md:w-full md:h-px  group-last:hidden", completed ? 'bg-[#6E40D7]' : 'bg-[#EAECF0]')}></div>
        </div>

      </div>
      <div className="grow md:grow-0 md:mt-3 pb-5 md:text-center">
      <span className="block text-sm font-medium text-gray-800">
        {title}
      </span>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </li>
  )
}

