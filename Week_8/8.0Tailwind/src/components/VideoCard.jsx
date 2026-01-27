import React from 'react'

const VideoCard = (props) => {
  return (
    <div className='p-3'>
        <img src={props.image} width={700} className='rounded-xl'/>
        <div className='grid grid-cols-12 pt-2'>
            <div className='col-span-1'>
                <img src={props.thumbImage} className='rounded-full w-15 h-15'/>
            </div>
            <div className='col-span-11 pl-3'>
              <div>
                {props.title}
              </div>
              <div className='col-span-11 text-gray-400 text-base'>
                {props.author}
            </div>
            <div className='col-span-11 text-gray-400 text-base'>
                {props.views} | {props.timestamp}
            </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard