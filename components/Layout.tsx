import type { NextPage } from 'next';
import Navbar from "./Navbar"

type LayaoutProps = {
    children: React.ReactNode,
};

const Layout: NextPage<any> = ({ children }: LayaoutProps) => {
    return(
        <div>
            <Navbar></Navbar>
            <h2>Texto</h2>
            {children}
        </div>
    )
}
export default Layout;