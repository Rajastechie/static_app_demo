import React, { useEffect, useState } from 'react'
const API = "AIzaSyC1NL0x8Xh2Li9JOfaORmG0igyR22c81X0"
const channelId = "UC6Naq7aM5GgupsKOZJ4LMng"

var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`

const YTvideos = () => {
    const [allvideos, setAllvideos] = useState([])
    useEffect(()=>{
        fetch(fetchurl).then((response)=> response.json()).then((resJson)=>{
            const result = resJson.items.map(doc=>({
                ...doc,
                VideoLink: "https://www.youtube.com/embed/"+doc.id.videoId
            }));
            setAllvideos(result)
        })
    },[])

    console.log(allvideos)
    return (
        <div>
            {allvideos.map((item)=>{
                return(
                    <div>
                        <iframe width="560" height="315" src={item.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                );
            })}
        </div>
    );
};

export default YTvideos
