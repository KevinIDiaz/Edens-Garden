import { Navigation } from "./components/Navigation"
import {Footer} from "./components/Footer"
import { Outlet } from "react-router-dom"
import './Layout.css'

export function Layout(){
    return(
        <div id='content'>
            <Navigation/>
            <div id='page'>
                <main >
                <Outlet/>
            </main>
            </div>
            
            <Footer/>
        </div>
    )
}