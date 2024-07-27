import React from 'react'

const Payment = () => {
    return (
        <div className='min-h-full flex flex-col gap-5 p-4'>
            <div className='border-2 border-[#D7D7D7] p-3 flex justify-between items-center px-3 rounded-lg'>
                <h1 className='font-semibold text-[14px]'>
                    Add Payment Method
                </h1>
                <button className='px-7 py-1 rounded-lg bg-[#FAFAFA] border-2 text-[14px] border-[#D7D7D7] font-semibold'>
                    Add Money
                </button>
            </div>
            <div>
                <p className='text-[12px] text-[#686B6E]'>This campaign will begin at the scheduled time, pending  and approval. By submitting your ad for approval, you agree to Grovyo’s Terms for Self-Serve Advertising.</p>
            </div>
            <div className='flex flex-col gap-5 border-2 border-[#D7D7D7] rounded-lg p-3'>
                <h1 className='text-[16px] font-semibold'>Preview</h1>
                <section className='flex gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[12px] text-[#686B6E]'>Ad name</h1>
                        <p className='text-[11px] font-semibold'>Style with Our Latest Watch Collection</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[12px] text-[#686B6E]'>Ad Goal</h1>
                        <p className='text-[11px] font-semibold'>Gadgets and Wearable</p>
                    </div>
                </section>
                <hr />
                <section className='flex gap-8'>
                    <div className='flex flex-col justify-between gap-2'> 
                        <h1 className='text-[12px] text-[#686B6E]'>Budget</h1>
                        <div className='flex gap-4'>
                        <h1 className='flex flex-col gap-2'><span className='text-[12px]'>Total Budget</span><span className='text-[12px]'>50,000</span></h1>
                        <h1 className='flex flex-col gap-2'><span className='text-[12px]'>Daily Budget</span><span className='text-[12px]'>50,000</span></h1>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-2'> 
                        <h1 className='text-[12px] text-[#686B6E]'>Date & Time</h1>
                        <div className='flex gap-4'>
                        <h1 className='flex flex-col gap-2'><span className='text-[12px]'>Start Date</span><span className='text-[12px]'>05-10-2024</span></h1>
                        <h1 className='flex flex-col gap-2'><span className='text-[12px]'>End Date</span><span className='text-[12px]'>10-05-2024</span></h1>
                        </div>
                    </div>
                </section>
                <hr />
                <section className='flex flex-col gap-2'>
                    <h1 className='text-[12px]'>Target People</h1>
                    <div className='flex gap-10'>
                        <p className='flex flex-col gap-2'>
                            <span className='text-[12px] text-[#686B6E]'>Gender</span>
                            <span className='text-[12px]'>Male</span>
                        </p>
                        <p className='flex flex-col gap-2'>
                            <span className='text-[12px] text-[#686B6E]'>Age Group</span>
                            <span className='text-[12px]'>All Age grop</span>
                        </p>
                        <p className='flex flex-col gap-2'>
                            <span className='text-[12px] text-[#686B6E]'>Collection</span>
                            <span className='text-[12px]'>order Now</span>
                        </p>
                    </div>
                </section>
                <hr/>
                <section className='flex gap-10'>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-[12px]'>Location</h1>
                    <div>
                        <button className='rounded-xl text-[10px] bg-[#F3F4F6] p-2'>Delhi</button>
                        <button className='rounded-xl text-[10px] bg-[#F3F4F6] p-2'>Delhi</button>
                        <button className='rounded-xl text-[10px] bg-[#F3F4F6] p-2'>Delhi</button>
                    </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <h1 className='text-[12px]'>Types of ad</h1>
                    <div>
                        <button className='rounded-xl text-[10px] bg-[#F3F4F6] p-2'>In feed</button>
                        
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Payment
