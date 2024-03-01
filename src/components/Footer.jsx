import React from 'react'

const Footer = () => {
  return (
	<div className=" w-full py-5 flex flex-col text-center text-white">
<div className=' flex flex-col md:flex-row lg:flex-row justify-center gap-2 md:gap-6 lg:gap-10 mb-4'>
<p className=' text-base font-medium'>Press Room</p>
<h1 className=' text-base font-medium'>Advertising</h1>
<p className=' text-base font-medium hidden md:flex lg:flex'>Jobs</p>
<p className=' text-base font-medium'>Condition of use</p>
<p className=' text-base font-medium'>Privacy Policy</p>


</div>
            <h1 className=' flex flex-col md:flex-row lg:flex-row justify-center'>© Get Api <b>The Movie Database.</b> All Rights Reserved<br/>
                </h1>
                <p className=' mt-2 font-medium text-xs text-[hsla(0,0%,100%,.75)]'>by Hla Yaminn Phyu</p>

        </div>
  )
}

export default Footer