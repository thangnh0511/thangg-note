import React from "react";
import '../mainLayout.css'
import { HeaderBox } from "../Header.js";
import Content from './Content'
import RoutesPath from "../../Routes/Routes";
import ContentBox from "../../ContentBox/ContentBox";
// import RoutePath from "../../../pages/RoutePath/RoutePath";

export default function Main(title) {
    return(
        <React.Fragment>
            <ContentBox title={title}/>

            <div className='main'>
                <HeaderBox/>
                {/* <RoutePath/> */}
                <RoutesPath/>
                <Content classStyle={'content'}/>
            </div>
        </React.Fragment>
        
    )
}