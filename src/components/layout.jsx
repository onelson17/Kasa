import Header  from './header.jsx'
import Footer from './footer.jsx'


function Layout({children}) {
    return (
        <div className='layout'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout