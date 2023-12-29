import { useState } from "react";

const Home = () => {

    // let name = "Mario";
    const [name, setName] = useState("Mario")
    const [age, setAGe] = useState(20)

    const handleClick = (event)=>{
        // console.log("Hello Ninjas")
        // console.log("Hello Ninjas", event)
        // name="Luigi";
        // console.log(name)
        if (name==="Yoshi") setName("Mario")
        else setName("Yoshi")
    }

    // const handleClickAgain = (name, event)=>{
    //     console.log(`Hello ${name}`)
    //     // console.log(event)
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me!</button>
            {/* <button onClick={(event) => {handleClickAgain("Yoshi", event)}}>Click Me!</button> */}
        </div>
    );
}
 
export default Home;