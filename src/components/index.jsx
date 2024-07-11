import { useState } from 'react';
import { useStore, StoreProvider } from "../Store/Store"
import NavBar from "./Navbar";
import Navi_Hero from "./Navi+Hero(section)";

export default function Counter({
	children,
	count: initialCount,
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	// const subtract = () => setCount((i) => i - 1);
	// const subtract = () => localStorage.setItem('username', 'john_doe');
    const [state, dispatch] = useStore();
    console.log(state)

	return (
		<>
            <StoreProvider>
                <NavBar />
                <Navi_Hero />
            </StoreProvider>
        </>
	);
}