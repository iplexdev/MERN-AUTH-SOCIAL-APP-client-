import React from 'react'
import FontAwesome from 'react-fontawesome'

export default () => (
  <footer style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    <a 
      href='https://github.com/iplexdev/React-Authentication-Social-App' 
      title='Github repo'
      className='small-button github'
    >
      <FontAwesome
        name='github'
      />
    </a>
    <div>
      <h6>IplexDev</h6>
    </div>
  </footer>
)

