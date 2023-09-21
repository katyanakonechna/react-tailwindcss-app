import {useState} from "react";

const Header = () => {
    const [isDropdownOpened, setDropdownOpened] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpened(!isDropdownOpened);
    }
    return <div className="flex justify-end px-10 py-4">
        <div className="flex w-6 justify-end text-white relative">
            <button onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
            </button>
            {isDropdownOpened && <div className="absolute top-9 right-0 bg-white">Dropdown</div>}
        </div>
    </div>
}

export default Header;