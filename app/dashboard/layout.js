import HeaderBar from "@/components/header-bar";
import NavBar from "@/components/nav-bar";

export default function Layout({ children }) {
    return (
        <div>
            <HeaderBar />
            {children}
            <NavBar />
        </div>
    )
}