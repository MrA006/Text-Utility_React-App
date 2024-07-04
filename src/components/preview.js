import React from 'react'

const Preview = (props) => {
  
  let words = props.text.split(' ');
  let words_len = 0;
  if (props.text.length !== 0) {
    
      if(props.text.charAt(props.text.length - 1) === ' '){
          words_len = words.length - 1;
        }else{
            words_len = words.length;
        }
}

  return (
    <div style={{color:(props.mode==='dark'?'white':'black')}}>
      <div className='container' >{props.text.length} characters and {words_len} words</div>
      <div className='container'>
        
      <h2>Preview</h2>
      <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Preview
