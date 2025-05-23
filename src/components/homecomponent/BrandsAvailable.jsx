import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const BrandsAvailable = () => {
    const brands = [
        { name: "Kia", logo: "/images/CarLogos/Kia.png" },
        { name: "Toyota", logo: "/images/CarLogos/toyota.png" },
        { name: "Mahindra", logo: "/images/CarLogos/mahindraa.png" },
        { name: "MG", logo: "/images/CarLogos/mg.png" },
        { name: "Tata", logo: "/images/CarLogos/tata.png" },
        { name: "Honda", logo: "/images/CarLogos/honda.png" },
        { name: "BMW", logo: "/images/CarLogos/bmw.png" },
        { name: "Mercedes-Benz", logo: "/images/CarLogos/mbenz.png" },
        { name: "Maruti", logo: "/images/CarLogos/suzuki.png" },
        { name: "Audi", logo: "/images/CarLogos/audi.png" },
    ];

    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const scrollContainer = scrollRef.current;
    //     let scrollAmount = 0;

    //     const scrollInterval = setInterval(() => {
    //         if (scrollContainer) {
    //             scrollAmount += 1;
    //             scrollContainer.scrollLeft = scrollAmount;

    //             if (scrollAmount >= scrollContainer.scrollWidth / 2) {
    //                 scrollAmount = 0; 
    //             }
    //         }
    //     }, 20); 

    //     return () => clearInterval(scrollInterval);
    // }, []);

    return (
        <div className="text-white py-10">
            <h2 className="text-center text-xl font-bold mb-16">
                Brands Available
            </h2>
                <div
                    className="flex space-x-10 md:space-x-16 overflow-hidden whitespace-nowrap scroll-container"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}
                >
                <Marquee 
                    autoFill
                    
                >
                    <div className="flex space-x-10 md:space-x-16 mr-10 md:mr-16">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between items-center flex-shrink-0 w-28 md:w-32"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-18 h-18"
                                />
                                <span className="text-sm md:text-base">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
                    
                </div>
        </div>
    );
};

export default BrandsAvailable;
