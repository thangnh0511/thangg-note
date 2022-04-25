// import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NotePage from "../NotePage/NotePage";
import StudyPage from "../StudyPage";

// import { Input, Menu } from 'semantic-ui-react'



// export function RoutePath() {

//     let navigate = useNavigate

//     return (
//         <div>
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/note">Note</Link>
//             <Link to="/study">Study</Link>
//         </nav>
//         <Routes>
//             <Route path="/" element={<HomePage/>}/>
//             <Route path="/note" element={<NotePage/>}/>
//             <Route path='/study' element={<StudyPage/>}/>
//         </Routes>
//         </div>
//     );

   
// }

// =================================================

import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

export default class RoutePath extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <div>
            <Segment inverted>
                <Menu inverted pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/">Home</Link>    
                </Menu.Item>
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                >
                     <Link to="/note">Note</Link>
                </Menu.Item>
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/study">Study</Link>
                </Menu.Item>
                </Menu>
            </Segment>
            {/* <Menu secondary>
                <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}>
                    <Link to="/">Home</Link>    
                </Menu.Item>
                <Menu.Item
                name="messages"
                active={activeItem === "messages"}
                onClick={this.handleItemClick}>
                    <Link to="/note">Note</Link>
                </Menu.Item>
                <Menu.Item
                name="friends"
                active={activeItem === "friends"}
                onClick={this.handleItemClick}>
                    <Link to="/study">Study</Link>
                </Menu.Item>
            </Menu> */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/note" element={<NotePage/>}/>
                <Route path='/study' element={<StudyPage/>}/>
            </Routes>
        </div>

    );
  }

  
}



// ===================================

// import React from 'react'
// import { Tab } from 'semantic-ui-react'

// const panes = [
//   { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
//   { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
//   { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// ]

// const TabExampleBasic = () => <Tab panes={panes} />

// export default TabExampleBasic
