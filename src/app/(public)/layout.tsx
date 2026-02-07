import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";


export default function PublicLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode
}>) {
    return (

        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>

    )
}