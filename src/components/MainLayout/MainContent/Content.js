import React, {useState, useEffect} from "react";
import '../mainLayout.css'
import { Header } from "../Header";
import RoutePath from "../../../pages/RoutePath/RoutePath";
import ContentBox from "../../ContentBox/ContentBox";

export default function Content(props) {

    const {classStyle, idStyle} =props

    const [todo, setTodo] = useState([]);

    const set_complete = (id) => {
        const updated_todo = todo.map(item => {
            if (item.id === id) {
                item.completed = true;
            }
            return item;
        });
        setTodo(updated_todo);
    }

    const get_todos = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => setTodo(data));
    }

    useEffect(get_todos, []);

  return (
      <>
        <div className='content-wrap'>
            <div className="content_container">
            <ContentBox title='Test Content Box'/>
            {/* {
                todo && todo.map( item => {
                    return  <li className="list-group-item" key={item.id}>
                            <div className="mb-3 form-check">
                                
                                <label className="form-check-label" htmlFor="exampleCheck1">{item.title}</label>
                            </div>
                        </li>
                })
            } */}
                
            </div>

            <div className="content_nav">
                {/* <div className="content_nav--sticky"></div> */}
            </div>
        </div>
        
      </>
  );

}