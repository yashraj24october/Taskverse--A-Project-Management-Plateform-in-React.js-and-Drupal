import React from 'react'
import './SecondaryMenu.css'
import { Link } from "react-router-dom";
const  SecondaryMenu = () =>{
return <nav className='nav-menu'>
<ul>
<li><Link to='/'><span>&#43;</span>Add New Task</Link></li>
<li><Link to='/'><span>&#43;</span>Add New Project Info</Link></li>
<li><Link to='/'><span>&#43;</span>Add New Project Documentation</Link></li>
<li><Link to='/'><span>&#43;</span>Add Useful Code Snippets / Web Components</Link></li>
<li><Link to='/'><span>&#43;</span>Add Blog</Link></li>
</ul>
</nav>

}


export default  SecondaryMenu;