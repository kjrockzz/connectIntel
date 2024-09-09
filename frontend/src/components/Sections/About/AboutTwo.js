import Link from "next/link"

const AboutTwo = () => {
    return (
        <section className="about-block lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-10 pb-8">
            <div className="container">
                <div className="flex gap-y-3 items-center justify-between max-lg:flex-wrap">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h3 className="heading3">We are your strategic partner for business development</h3>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="desc">At CollectIntel, we’re more than just business consultants; we’re your strategic partner in business development, passionately committed to your success. Our mission is to respect and amplify the unique values of each enterprise we work with. Through innovative, data-driven solutions and tailored strategies, we help bridge the gap between offline and online customer acquisition channels, empowering your business to achieve new heights of growth and engagement.</div>
                        <Link className="text-button-sm inline-block mt-4 border-b-2 border-black" href="#about-us-section">About Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo