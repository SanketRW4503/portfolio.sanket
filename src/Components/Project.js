import { useEffect, useRef, useState } from "react";
import { myInfo } from "../utils/data";
import ProjectCard from "./ProjectCard";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Project = () => {
    const scrollRef = useRef(null);
    const projectSectionRef = useRef(null); // Ref for the project section
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    // Function to get the scroll amount based on screen width
    const getScrollAmount = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768 && screenWidth < 1024) {
            // md screen size (768px - 1024px)
            return 300;
        }
        return 500; // Default scroll for larger or smaller screens
    };

    const handleWheelScroll = (e) => {
        if (scrollRef.current) {
            e.preventDefault(); // Prevent vertical scrolling
            const scrollSpeed = 4;
            scrollRef.current.scrollLeft += e.deltaY * scrollSpeed; // Scroll horizontally
            updateButtonVisibility();
        }
    };

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += getScrollAmount(); // Scroll right based on screen size
            updateButtonVisibility();
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= getScrollAmount(); // Scroll left based on screen size
            updateButtonVisibility();
        }
    };

    const updateButtonVisibility = () => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            // Check if there's more to scroll left
            setShowPrev(scrollContainer.scrollLeft > 0);

            // Check if there's more to scroll right
            setShowNext(
                scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth
            );
        }
    };

    // Add scroll event listener for touch scrolling on mobile
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        // Handle scrolling with mouse wheel and touch scroll
        scrollContainer.addEventListener("wheel", handleWheelScroll);
        scrollContainer.addEventListener("scroll", updateButtonVisibility); // Add scroll event

        updateButtonVisibility(); // Initial check when the component mounts

        return () => {
            scrollContainer.removeEventListener("wheel", handleWheelScroll);
            scrollContainer.removeEventListener("scroll", updateButtonVisibility); // Cleanup scroll event
        };
    // eslint-disable-next-line
    }, []);

    // Automatically click to activate the scroll when the project section is in view
    useEffect(() => {
        const sectionElement = projectSectionRef.current; // Copy ref value to a local variable

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && scrollRef.current) {
                        // Simulate a click to activate the scroll
                        scrollRef.current.click();
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed (0.5 means 50% visibility)
        );

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement); // Use the saved element, not the ref
            }
        };
    }, []);

    return (
        <div
            ref={projectSectionRef} // Reference the project section for intersection observation
            className="my-8 flex flex-col justify-center items-center mx-[18%] max-[450px]:mx-[0%]"
            id="projects"
        >
            <h1 className="font-bold text-4xl">Projects</h1>

            <div className="relative w-full mt-8 flex justify-center items-center">
                {/* Previous Button */}
                {showPrev && (
                    <GrFormPrevious 
                        className="cursor-pointer text-4xl"
                        onClick={handlePrev}
                    />
                )}

                <div
                    className="flex space-x-10 w-full p-10 overflow-x-auto touch-pan-x h-max"
                    ref={scrollRef}
                    style={{ scrollBehavior: "smooth" }}
                >
                    {myInfo.projects.map((p, index) => (
                        <ProjectCard key={p.liveLink} data={p} />
                    ))}
                </div>

                {/* Next Button */}
                {showNext && (
                    <MdOutlineNavigateNext
                        className="cursor-pointer text-4xl"
                        onClick={handleNext}
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
