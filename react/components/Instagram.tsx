import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import axios from 'axios'

const CSS_HANDLES = ['instagramPageContainer', 'imageContainer', 'imageItem']

interface Images {
  id: string
  media_url: string
  media_type: string
  permalink: string
  thumbnail_url: string
}

interface Props {
  imageWidth: number
  imageHeight: number,
  imageCount: number
}

const Instagram = (props: Props) => {
  
  const [images, setImages] = React.useState<Images[]>([]);
  const handles = useCssHandles(CSS_HANDLES)

  const { imageWidth = 200 } = props
  const { imageHeight = 200 } = props
  const { imageCount = 6 } = props

  React.useEffect(() => {
    axios.get(
      '/_v1/api/getInstagramDetails'
    ).then(res => {
      const imgArr : any[] = []
      console.log(imageCount)
      for (var i=0; i <= imageCount - 1; i++) {
        if (res.data.data[i].media_type == "IMAGE") {   
          imgArr.push(res.data.data[i])       
          setImages(imgArr)
        }
      }
    })
    .catch((e: any) => console.log(e))
  },[])

  return (images.length > 0) ? (
    <div className={`flex flex-wrap items-stretch justify-center ${handles.instagramPageContainer}`}>
        {images.map(image => (
          <div className={`ma5 pa3 flex flex-row ${handles.imageContainer}`} key={`${image.id}`}> 
            <a href={`${image.permalink}`}>
              <img className={`img w-100 ${handles.imageItem}`} 
                src={`${image.media_url}`} 
                style={{height: imageHeight, width: imageWidth}} />
            </a>
          </div>
        ))}
    </div>
  ): null
}

export default Instagram
