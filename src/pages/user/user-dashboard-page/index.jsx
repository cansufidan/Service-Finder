import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux"

export default function UserDashboardPage(){
    const authState = useSelector(state => state.authState);
    return (
        <>
        <main>
         <div 
         className="d-flex flex-column flex-shrink-0 p-3" 
         style={{width: "280px"}}
         >
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr/>

    <Dropdown>
      <Dropdown.Toggle 
      className= "align-items-center w-100 text-decoration-none dropdown-toggle"
      variant="primary" 
      id="dropdown-basic"
      >
      <img 
      src="https://github.com/mdo.png" 
      alt="" 
      width="32" 
      height="32"
      className="rounded-circle me-2"/>
        <strong>{authState.user?.fullname}</strong>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
        <Dropdown.Item href="#/action-2">My Projects</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item href="javascript:void(0)">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
    </main>
    </>
    )  
}