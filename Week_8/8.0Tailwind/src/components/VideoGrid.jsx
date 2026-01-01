import React from 'react'
import VideoCard from './VideoCard'

const VIDEOS = [{
    title:"What's wrong with RA-SWA-PA?",
    image: "photo.jpg",
    thumbImage: "https://yt3.ggpht.com/rhICPV-vCayatPwZm0g0cur51rO-L6m1Df2y52I70Dn2tNOdS2K8Aio1Ag7n9UqdxmOeZ-BrQvA=s88-c-k-c0x00ffffff-no-rj",
    author: "IN DEPTH STORY",
    views: "100K",
    timestamp: "2 days ago",
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "IN DEPTH STORY",
    views: "100K",
    timestamp: "2 days ago",
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "IN DEPTH STORY",
    views: "100K",
    timestamp: "2 days ago",
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "IN DEPTH STORY",
    views: "100K",
    timestamp: "2 days ago",
}, {
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "IN DEPTH STORY",
    views: "100K",
    timestamp: "2 days ago",
},
]
const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {VIDEOS.map((video) =>{
            return <div>
                <VideoCard

                    title={video.title}
                    image={video.image}  
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                />
            </div>
        })}
    </div>
  )
}

export default VideoGrid