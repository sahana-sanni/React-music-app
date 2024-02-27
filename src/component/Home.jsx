import React, { useState } from 'react'
import Search from './Search'
import pics from '../images/pics'
import config from '../token/config'
import {  Link } from 'react-router-dom'

const URL = 'https://api.spotify.com'

function Home() {
  const [artist,setArtist] = useState(false) 


  const searchArtist = async (artistName) => {
    console.log(`artistname =`, artistName)

    //api call
    await fetch(`${URL}/v1/search?q=${artistName}&type=artist`,{
      method: "GET",
      headers: {
        Authorization: `${config.token_type} ${config.access_token}`
      }
    }).then(res => res.json())
    .then(res => {
      console.log(`artist = `, res)
      setArtist(res.artists.items ? res.artists.items[0] : false)
    }).catch(err=> console.log(err.message))

  }
  return (
    <div className="container">
      {
        artist ? (
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src={artist.images? artist.images[0].url: ''} alt=''
                className='card-img-top'/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h1 className='text-center display-5 text-success'>
                    {artist.name}
                  </h1>
                  <Link to ={`/music/${artist.id}`}className="btn btn-success">Load Track</Link>
                </div>
              </div>
            </div>
          </div>
        ):(
          <div className="row">
          <Search find = {searchArtist}/>
          <div className="col-md-6">
          <img src={pics.happy} alt='' className='img-fluid' />
  
          </div>
        </div>
        )
      }

      
    </div>
  )
}

export default Home