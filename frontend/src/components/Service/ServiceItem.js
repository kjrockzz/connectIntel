import { convertToSlug } from "@/common/utils"
import Link from "next/link"

const ServiceItem = ({ data, type }) => {
    return (
        <>
            
            {type === 'style-two' && (
                <div className="service-item style-two rounded-2xl bg-white h-full">
                    <div className="main md:p-10 p-8 flex items-start gap-6 h-full"
                        
                      
                    >
                        <i className={`${data.icon} text-6xl text-blue flex-shrink-0`}></i>
                        <div className="">
                            <strong className="service-name heading5">{data.title}</strong>
                            <p className="service-desc text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </div>
                </div>
            )}
            
            
        </>
    )
}

export default ServiceItem