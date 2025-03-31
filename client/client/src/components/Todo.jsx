import {Usestate} from 'react';

function Todo(){
    const [count,setcount]=Usestate(0)
    return(
        <>
        <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>Welcome to Simple Supermarket, your one-stop shop for all your grocery needs.</p>
        {/* Add more about content here */}
      </div>
      <div height='1000px'>
        <h1 font-size='200px'>{count}</h1>
        <button onClick={setcount+1}>add</button>
        </div>
       
    </section>
         </>

    );
}
export default Todo;