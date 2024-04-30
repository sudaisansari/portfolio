import Image from "next/image"

import ssuetlogo from "/public/ssuet.png"
import piaiclogo from "/public/piaic.png"

const EducationData = [
    {
        slug: "ssuetlogo",
        name: "Sir Syed University of Engineering & Technology",
        degree: "Bachelor of Science in Computer Science",
        time: "October 2022 - March 2026",
        Image: ssuetlogo
    },
    {
        slug: "piaiclogo",
        name: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
        degree: "Web 3.0 (Blockchain) and Metaverse Specialization",
        time: "July 2022 - July 2024",
        Image: piaiclogo
    }
];

const Education = () => {
    return (
        <section>
            <div className="my-12 pb-12 md:pt-16 md:pb-20">
                <h2 className="text-center font-bold text-4xl">
                    Education
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-600 border-0 rounded"></hr>
                </h2>
                    {
                        EducationData.map((item, i) => (
                            <div key={item.slug} className="flex flex-col md:flex-row md:gap-x-4 gap-y-3 items-center mt-12 ">
                                {/* Left Image */}
                                <div>
                                    <Image
                                        src={item.Image}
                                        alt="SSUET"
                                        width={75}
                                        height={75}
                                        className="rounded-full shadow-lg"
                                    />
                                </div>
                                {/* Right Content */}
                                <div className="text-center md:text-left">
                                    <h3 className="text-center text-2xl font-semibold mb-3 md:text-left">
                                        {item.name}
                                    </h3>
                                    <h4 className="font-medium mb-2">
                                        {item.degree}
                                    </h4>
                                    <h5 className="text-sm">
                                        {item.time}
                                    </h5>
                                </div>
                            </div>

                        ))
                    }
                </div>
        </section>
    )
}

export default Education