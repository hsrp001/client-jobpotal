import React from 'react'

function Jobresult({companyname, jobname,  des ,  expericence , salary}) {
  return (
    <div>
        <div class=" cursor-pointer">
  <div class="group mx-2  mt-4 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-black shadow transition hover:shadow-lg ">
 
    <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 class="text-sm text-gray-600 flex gap-4"><span className=' font-bold text-black '>Company :</span>{companyname}</h3>
      <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">{jobname} </a>
      <p class="overflow-hidden pr-7 text-sm">{
      des? des.slice(0, 200) + ".....":"..."
      
      
      }</p>

      <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div class=" font-bold text-black">Experience:<span class="ml-2 mr-3 rounded-full bg-blue-950 px-2 py-1 text-white">{expericence} year </span></div>
        <div class=" font-bold text-black">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-950 px-2 py-1 text-white">{salary}</span></div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Jobresult