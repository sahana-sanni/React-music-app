import React, { useEffect, useState } from 'react'
import config from '../token/config'
import { useParams } from 'react-router-dom'

const url = 'https://api.spotify.com'

function Music() {
  const [tracks,setTracks] = useState([])//array of tracks
  const [data,setData] = useState(false)

  

  const params = useParams()

  const getTracks = async () => {
    await fetch(`${url}/v1/artists/${params.id}/top-tracks?market=IN`, {
      method: 'GET',
      headers: {
         Authorization: `${config.token_type} ${config.access_token}`
      }
    }).then(res => res.json())
    .then(res => {
      console.log(`tracks =`, res)
      setTracks(res.tracks)
    }).catch(err => console.log(err.message))

  }

  useEffect(() => {
     getTracks()
  }, [])

  const modalHandler = (name,album,preview_url) => {
    setData({
      name,
      album,
      preview_url
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-ms-12 text-center">
          <h3 className="display-3 text-success">Music Tracks</h3>
          <p> { params.id } </p>
        </div>
      </div>
      <div className="row">
        {
           tracks && tracks.map((item,index) => {
            const { name, album, preview_url } = item
            return (
              <div className='col-md-3 col-sm-6 mt-2 mb-2' key={index}>
                <div className="card" onClick={()=> modalHandler(name,album,preview_url)} data-bs-toggle="modal" data-bs-target="#musicModal">
                  <img src={album ? album.images[0].url : ''} alt=''
                  className='card-img-top'/>
                  <div className="card-body text-center">
                    <h6> { name } </h6>
                  </div>
                </div>
              </div>
            )
           })
        }
      </div>

      {/* player */}
     <div className='modal fade' id='musicModal'>
       <div className='modal-dialog'>
        <div className="modal-content">
          <div className="modal-header">
            <h6> { data.name }</h6>
            <button type='button' className='btn-close' data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <div className="card">
            <img src={data.album ? data.album.images[0].url : ''} alt='' className='card-img-top'/>
                  <div className='card-body text-center'>
                  </div>
            </div>
          </div>
          <div className='modal-footer d-flex justify-content-center'>
             <audio controls src={data.preview_url ? data.preview_url : ''} ></audio>
          </div>
        </div>
       </div>
     </div>
       {/* player end */}
    </div>
  )
}

export default Music