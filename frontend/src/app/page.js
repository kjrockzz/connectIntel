import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import AboutTwo from "@/components/Sections/About/AboutTwo";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionTwo from "@/components/Sections/Solution/SolutionTwo";
import serviceData from "@/data/service/data.json"
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialTwo from "@/components/Sections/Testimonial/TestimonialTwo";
import testimonialData from "@/data/testimonial/data.json"
import LayoutTwo from "@/components/Layout/LayoutTwo";
import CtaTwo from "@/components/Sections/Cta/CtaTwo";
import CounterTwo from "@/components/Sections/Counter/CounterTwo";

import CounterAbout from "@/components/Sections/Counter/CounterAbout";
import BenefitAbout from "@/components/Sections/Benefit/BenefitAbout";



export default function homepage() {
    return (
        <LayoutTwo>
            <SliderTwo />
            <AboutTwo />
            <CtaTwo />
            <BenefitOne classname="lg:mt-[60px] sm:mt-10 mt-8" data={benefitData} start={4} limit={8} />
            <SolutionTwo data={serviceData} start={16} limit={22} />
            <CounterTwo />
           
            <div id = "about-us-section" className="bg-subpage absolute  w-full h-[740px] bg-linear-gradient z-[-1]"></div>
               
               <div className="md:pt-14 "></div>
                {/* <BrandOne classname={'lg:pt-20 md:pt-14 pt-10 lg:pb-[60px] md:pb-12 py-8 style-subpage'} /> */}
                <CounterAbout />                
                <BenefitAbout />
                <TestimonialTwo data={testimonialData} classname={'bg-linear-blue'} />

            
            {/* <ContactOne classname={'bg-linear-blue'} /> */}
        </LayoutTwo>
    );
}
