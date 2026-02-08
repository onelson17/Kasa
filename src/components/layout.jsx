import Header  from './Header.jsx'
import Footer from './Footer.jsx'


function Layout({children}) {
    return (
        <div className='layout-contain'>
            <div className='layout'>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout