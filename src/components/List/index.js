import { useEffect, useState } from "react";
import { allUrl } from "../../Utils";
import './style.css';



const List = () => {
    const [data, setdata] = useState([]);
    const [value, setValue] = useState('');

    const gettingData = async () => {
        const response = await fetch(allUrl);
        const data = await response.json();
        setdata(data);
    
      }
     
    
      useEffect(()=>{
        gettingData()
      }, [])
   
    return (
        <>
        <form className="form">
            <div className="search">
                <input type = 'text' name="name" id="name" onChange={(event) => setValue(event.target.value)}></input>
            </div>
        </form>

        <section className="sec">
            <div className="div">
                {
                    data.map (item => {
                        console.log(item)
                        return (
                            <div>
                                <h2>Name:</h2>
                                <p>{item.name.common}</p>
                                <h2>Flag:</h2>
                                <p>{item.flags.png}</p>
                            </div>)
                    })
                }
            </div>
        </section>
        
        </>
    )
};

export default List;