import React, { useState } from 'react'

function Search(props) {
    const [key,setKey] = useState('')
    const [err,setError] = useState(false)
    const [errMsg,setErrorMsg] = useState('')

    const handler = () => {
       if(!key){
        setError(true)
        setErrorMsg('The input field should not be empty..')
        setTimeout(() => {
            setError(false)
            setErrorMsg('')
        }, 3000)
       }else{
        props.find(key)
       }
    }


  return (
    <div className='col-md-6  mt-5'>
        <div className="block mt-5">
            <h1 className="display-1">
                <span className="text-success">Music</span> for Everyone.
            </h1>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <div className="input-group">
                        <input type='Search' name='key' value={key} onChange={(e) => setKey(e.target.value)} id='key' className='form-control' placeholder='Enter Artist name here' />
                       
                        <button onClick={handler} className='btn btn-success'>Search</button>
                    </div>
                    <strong className="text-danger">
                        { err ? errMsg : null }
                    </strong>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Search