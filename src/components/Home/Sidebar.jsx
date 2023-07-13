import React from "react"
import { Link } from "react-router-dom"

function Sidebar () {
  
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-lg offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center gap-2" to='/home'>Semua Buku</Link>
                  </li><li className="nav-item">
                    <Link className="nav-link d-flex align-items-center gap-2" to='/add-book'>Tambah Buku</Link>
                  </li>
                </ul>
              </div>
            </div>
      </div>
  )
}

export default Sidebar