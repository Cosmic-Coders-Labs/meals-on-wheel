import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function GuestLayout({ children }) {
    return (
        <main className=" flex flex-col min-h-screen w-full">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
