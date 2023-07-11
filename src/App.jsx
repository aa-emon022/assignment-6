import React, { useState } from 'react';

function Header({title}) {
  
  return (
    <>
      <div style={{margin:'2px 3px 12px',
                   color:"Black"}}>{title}</div>
    </>
  );
}

function Content() {
  const [text, setTextField] = useState("");

  const handleClick = () => {
    setTextField(document.getElementById("textArea").value);
  };

  return (
    <>
      <textarea  id="textArea" cols="20" rows="3"></textarea><br></br>
      <button onClick={handleClick}>Click me</button>
      <p>{text}</p>
    </>
  );
}

const Footer =()=>{
  let contact="Footer"
  return(
    <>
 <div ><h1>{contact}</h1> 
<h4>Varendra University <br></br><span>Dept. Of CSE</span></h4>
</div>
    </>
   
  )
}

function App() {
  const title = 'Simple React Application';
  return (
    <>
    <div style={{ background: "linear-gradient(to right, #009fff, #ec2f4b)" , height: '100vh'}}>

    <div><Header title={title} /></div>
      <div>
        <Content />
      </div>
      <div><Footer/></div>
    </div>
      
    </>
  );
}

export default App;