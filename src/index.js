import React from "react";
import {render} from 'react-dom'
import SApp from './Components/SApp'
import EventEmitter from "EventEmitter";

window.ee = new EventEmitter();

render(<SApp/>, document.getElementById('root'));