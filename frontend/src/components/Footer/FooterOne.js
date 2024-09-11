import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import serviceData from "@/data/service/data.json"
import { convertToSlug } from "@/common/utils";

export default function FooterOne({ classname }) {
  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <Link href="/" className="logo">
                  {classname ? (
                    <Image src={'/images/cli/ci-black.png'} width={5000} height={5000} alt="logo" className="w-[148px]" />
                  ) : (
                    <Image src={'/images/cli/ci-black.png'} width={5000} height={5000} alt="logo" className="w-[148px]" />
                  )}
                </Link>
                <div className="caption1">At CollectIntel, we set out on a mission to seamlessly bridge the gap between offline and online customer acquisition channels, providing our clients with innovative, data-driven solutions that drive real results </div>
                <div className="caption1">Mon - Fri: 9:00 - 19:00 <br />Closed on Weekends</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              
                <div className="footer-nav-item flex flex-col md:flex-row md:justify-evenly  ">
                  <div>
                  <div className="item-heading text-button">Company</div>
                  <ul className="list-nav mt-3 flex flex-row gap-10" >
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/pages/contact-us">Contact</Link>
                    </li>
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/company/career">Carrer</Link>
                    </li>
                    
                    
                  </ul>
                </div>
                </div>

                {/* <div className="footer-nav-item">
                  <div className="item-heading text-button">Solutions</div>
                  <ul className="list-nav mt-3">
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/company/about-us">About us</Link>
                    </li>
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/company/our-teams">Our Team</Link>
                    </li>
                    
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/pages/contact-us">Contact</Link>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="footer-nav-item">
                  <div className="item-heading text-button">Solutions</div>
                  <ul className="list-nav mt-3">
                    {serviceData.slice(0, 6).map(item => (
                      <li className="mt-2" key={item.id}>
                        <Link className={`caption1 hover-underline ${classname && 'underline-white'}`}
                          href={process.env.PUBLIC_URL + "/services/[slug]"}
                          as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                          }
                        >
                          {item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
              
            </div>
            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                <div className="heading text-button">Connect with Us!</div>
                {/* <div className="send-block mt-4 flex items-center w-full relative">
                  <Icon.Envelope className="text-lg absolute top-1/2 left-0 -translate-y-1/2" />
                  <input className={`caption1 w-full h-[50px] pl-7 pr-9 bg-transparent border-b ${classname ? 'border-white focus:border-white' : 'border-black'}`} type="text" placeholder="Your email address" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Icon.PaperPlaneTilt className="text-2xl" />
                  </button>
                </div> */}
                <div className="list-social flex items-center flex-wrap gap-2.5 mt-7">
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.facebook.com/" target="_blank">
                    <i className="icon-facebook text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.linkedin.com/" target="_blank">
                    <i className="icon-linkedin text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.twitter.com/" target="_blank">
                    <i className="icon-twitter text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.youtube.com/" target="_blank">
                    <i className="icon-youtube text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:text-white hover:bg-black'}`} href="https://www.instagram.com/" target="_blank">
                    <i className="icon-instagram text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface1 caption1">©2024 CollectIntel. All Rights Reserved.</div>
              </div>
              <div className="nav-link flex items-center gap-2.5">
                <Link className="text-surface1 caption1 hover-underline" href="#!">Terms Of Services</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="#!">Privacy Policy</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="#!">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
