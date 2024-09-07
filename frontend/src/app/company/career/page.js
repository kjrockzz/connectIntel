import LayoutOne from "@/components/Layout/LayoutOne";
import caseData from '@/data/case-study/data.json'
import Link from "next/link";

export default function Carrer() {
    const data = caseData[3]

    return (
        <>
            <LayoutOne className="-style-1">
              
            <div className="form-login lg:py-20 sm:py-14 py-10 border-b border-outline">
  <div className="container flex items-center justify-center">
    <div className="form-inner w-[470px] max-[510px]:w-full">
      <h3 className="heading3 text-center flex items-center justify-center whitespace-nowrap">
        Join us in our Journey 
      </h3>
      <form className="form mt-6">
        <div className="form-group ">
          <label htmlFor="Name">Name*</label>
          <input id="Name" type="text" name="username" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Full Name*" />
        </div>
        <div className="form-group mt-6">
          <label htmlFor="Email">Email address*</label>
          <input id="username" type="text" name="username" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Email address*" />
        </div>
        <div className="form-group mt-6">
          <label htmlFor="Contact No">Contact No*</label>
          <input id="Contact" type="number" name="ContactNo" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Contact No*" />
        </div>
        <div className="form-group mt-6">
          <label htmlFor="Role">Role*</label>
          <input id="Role" type="text" name="Role" className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Role*" />
        </div>
        
        <div className="form-group mt-6">
          <label htmlFor="Resume">Upload your Resume*</label>
          <input id="Resume" type="file" name="resume" className="form-control w-full mt-3 h-[80px] rounded" />
        </div>
        
        <div className="sub-input-checkbox flex items-center gap-2 ">
          <input id="checkbox" type="checkbox" name="checkbox" />
          <label htmlFor="checkbox" className="text-surface1">
            I agree to the <Link href={'#!'} className="text-button text-black hover:underline" scroll={false}>Terms of User</Link>
          </label>
        </div>
        <div className="block-button mt-6">
          <Link className="button-main bg-blue w-full text-center" href="/pages/login">Apply</Link>
        </div>
      </form>
    </div>
  </div>
</div>

           
            </LayoutOne>
        </>
    );
}
