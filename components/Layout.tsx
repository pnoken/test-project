import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
//import Navbar from "./AdminNavbar";

type Props = {
  children?: ReactNode;
  title?: string;
};



const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [ user, setUser ] = useState("login")

  useEffect(() => {
let lStorage:any = window.localStorage.getItem("auth");
if (lStorage){
  lStorage = JSON.parse(lStorage);
  setUser(lStorage)
}
}, [])
return(
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      ></link>
    </Head>
    <div className='navbar'>
          <Link href="/">
          <a>
            <h1 className="text-light">The Healthy, Hunger-Free Kids</h1>
          </a>
          </Link>
          {(user != "login") ?
          <div>
          <Link href="/profile">
          <a>
            <h1 className="text-light">{user}</h1>
          </a>
          </Link>
          <Link href="/logout">
          <a>
            <h1 className="text-light">logout</h1>
          </a>
          </Link>
          </div>
          : <Link href="/login">
          <a><h1 className="text-light">{user}</h1></a></Link> }
        </div>
    {children}
    <footer>
      <hr />
      <span>Test Project</span>
    </footer>
  </div>
)};

export default Layout;
