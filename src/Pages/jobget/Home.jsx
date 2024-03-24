import React, { useEffect, useState } from 'react'
import Jobseachbox from './Jobseachbox'
import Jobresult from './Jobresult'
import Relatedjobreult from './Relatedjobreult'
import Selecton from '../../components/Selecton'
import { Link } from 'react-router-dom'

function Findjobhome() {

  const [jobdata, setjobdata] =useState([])
  const [dataid , setid]= useState('')
 const [loading , setLoading] = useState(true)
 const [size, setSize] = useState(window.innerWidth > 1024);

 useEffect(() => {
   const handleResize = () => {
     setSize(window.innerWidth > 1024);
   };

   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);

  useEffect(()=>{

    const data = async ()=>{

      try {
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/alljobs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {

          const data = await response.json()
          setjobdata(data.data)
          setLoading(false)
          setid(data.data[0]?._id);

        }

      } catch (error) {
        console.log("error  is ", error);
      }
      finally
      {
        setLoading(false)
      }


    } 

    data()


  },[])


  return (

    <div className=' min-h-screen' >
      
      <Jobseachbox></Jobseachbox>


<div className=' w-full  border-b-2 border-blue-800 '>

<div className='  grid grid-cols-2   gap-1  '>

<div className=' flex flex-col  justify-center items-end   '>

  <div className='     pt-9 sm:pt-8 text-lg  sm:text-2xl  text-center w-full sm:w-96 cursor-pointer '>
    Youre jobs
  </div>
<span className=' h-1 w-full bg-blue-950 sm:w-96'></span>
</div>

<div className=' flex flex-col justify-center items-center w-full sm:w-96'>

  <div className='  pt-9 sm:pt-8 text-lg  sm:text-2xl  cursor-pointer '>
    Recent Search
  </div>
<span className=' h-1 w-full bg-blue-950 sm:w-96'></span>
</div>




</div>


</div>


<div className=' grid grid-cols-1 lg:grid-cols-2  px-3'>


<div className='  min-h-[100vh]'>


{
  loading ? (
    <Selecton />
  ) : (
    jobdata.map((i) => (
      <div key={i._id}>
        { !size ? (
          <Link to={`${i._id}`}>
            <div onClick={() => setid(i?._id)} className='pb-7'>
              <Jobresult
                companyname={i?.companyName}
                jobname={i?.jobTitle}
                des={i?.jobDescription}
                expericence={i?.totalExp}
                salary={i?.salary}
              />
            </div>
          </Link>
        ) : (
          <div onClick={() => setid(i?._id)} className='pb-7 cursor-pointer'>
            <Jobresult
              companyname={i?.companyName}
              jobname={i?.jobTitle}
              des={i?.jobDescription}
              expericence={i?.totalExp}
              salary={i?.salary}
            />
          </div>
        )}
      </div>
    ))
  )
}

</div>
<div className=' pt-4 hidden lg:block'>

{size && (
          <div className='pt-4 hidden md:block'>
            <Relatedjobreult jobId={dataid} />
          </div>
        )}
</div>


</div>


    </div>
  )
}

export default Findjobhome