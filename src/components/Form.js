import React from 'react'

export default function Form(props) {
  
    //const [text , setText] = useState("Enter Text Here");
    
    const cap = () =>{
        let newText = props.text.toUpperCase();
        props.setText(newText);

    }
    const uncap = () =>{
      let newText = props.text.toLowerCase();
      props.setText(newText);
    }
    const remove = () =>{
      props.setText('');
    }  
    const copy = () =>{
      navigator.clipboard.writeText(props.text);
    } 
    
    const changeText = (event) =>{  
      props.setText(event.target.value);
    } 
  return (
    <div className="container" >
        <h1 htmlFor="FormControlTextarea" className="form-label my-4" style={{color:(props.mode==='light'?'black':'white')}}>Enter your Text</h1>
        <textarea className="form-control" value={props.text} id="FormControlTextarea" rows="8" onChange={changeText} style={{backgroundColor:(props.mode==='light'?'white':'#c3b8b8'), Color:'white'}}></textarea>
        <div className='container my-3'>
        <button className="btn btn-primary mx-3" onClick={cap} >Capitalise</button>
        <button className="btn btn-primary mx-3" onClick={uncap} >unCapitalise</button>
        <button className="btn btn-primary mx-3" onClick={remove} >Delete</button>
        <button className="btn btn-primary mx-3" onClick={copy} >copy</button>
        </div>

    </div>
  )
}
