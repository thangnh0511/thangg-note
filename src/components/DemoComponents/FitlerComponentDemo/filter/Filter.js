import { useEffect, useState } from "react";
import { _DATA } from "./Hardcode_Data";
import Attribute from "./Attribute/Attribute";
import Avata from "./Avata/Avata";
import { Link } from 'react-router-dom'
import { Input } from "semantic-ui-react";



function Filter() {

    const [data, setData] = useState([]);
    const [apiData, setApiData] = useState();
    const [input, setInput] = useState('');
    const [isShow, setIsShow] = useState(false)
    const [offset, setOffset] = useState(0)

    const _numberOfPage = 10

    let __DATA_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${_numberOfPage}`


    const handleOnClickPrevious = () => {
        setOffset(prev => prev - _numberOfPage)
    }

    const handleOnClickNext = () => {

        setOffset(prev => prev + _numberOfPage)

    }

    const handleOnClickToShow = () => {
        setIsShow(!isShow)
    }

    const handleOnChangeInput = (env) => {
        setInput(env)
    } 


    const getData = () => {
        // setData(_DATA)
        fetch(__DATA_URL)
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setApiData(data)
                setData(data.results)
            }
                )
        // .then(data => setData(data.results))
    }


    const resultList = data.filter(obj => obj.name.includes(input))

    useEffect(getData, [offset])

    return(

        <div id="container" style={{}}>
             {/* <Link to='/basic-form'>Basic Form</Link> */}
            <div>
                {/* <label>Offset</label><input></input>
                <label>Limit</label> */}
            </div>
            {/* <label>Filter</label> */}
            <Input 
                type='text'
                onChange={env => handleOnChangeInput(env.target.value)}
                // onClick = {handleOnClickToShow}
                style={{margin: '20px 0px'}}
                placeholder='Search...'
                icon='search'
            />
            <div>
                <button type="button" style={{marginRight: '20px'}} className={offset !== 0 ? "btn btn-primary" : "btn btn-primary disabled"} onClick={handleOnClickPrevious}>
                    Previous
                </button>
                <button type="button" className={"btn btn-primary"} onClick={handleOnClickNext} style={{margin:'20px 0px'}}>Next</button>
            </div>
            <div  className="container" style={{display: 'flex' , flexFlow: 'wrap-reverse'}}>
                {
                    resultList && resultList.map(obj => {
                        return (
                            <div className={"card text-white bg-dark mb-3"} 
                            style={{ minWidth: "16rem",maxWidth: "24rem", minHeight:"20rem", margin: 'auto', textAlign: '-webkit-left'}} key={obj.url}>
                            <div className="card-header"><strong>#{obj.url.slice(34,-1)}</strong></div>
                            <div className="card-body"> 
                                <Avata url={obj.url} alt={obj.name}/>
                              <h5 className="card-title">{(obj.name).toUpperCase()}</h5>
                              <p className="card-text">
                                  <Attribute 
                                    url={obj.url}
                                    option={obj.url.slice(34,-1)%2 ? true : false}
                                  />
                              </p>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Filter;

