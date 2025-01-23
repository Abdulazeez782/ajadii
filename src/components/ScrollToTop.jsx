import { ArrowUpIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 600) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
        <ArrowUpIcon 
            onClick={scrollToTop}
            className={`w-[50px] fixed bottom-[20px] right-[20px] cursor-pointer hover:scale-[1.1] transition-transform duration-300 ease-out bg-white rounded-md ${(visible) ? "block" : "hidden"}`}
        />
    </div>
  )
}

export default ScrollToTop