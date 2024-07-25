 
import Image from "../assets/imagesAll/hamburger1.png";

const About = () => {
  return (
    <div className="py-20 md:py-30 flex flex-col">
        <div className='container mx-auto flex items-center text-white gap-19 justify-center flex-wrap-reverse'>
            <div className="flex justify-center sm:w-1/2">
                <div className="relative sm:w-[445px] sm:h-[600px] w-[300px] h-[450px] flex justify-center">
                    <img src={Image} alt="Hamburger" />
                </div>
            </div>
            <div className="sm:w-1/2 max-sm:flex flex-wrap max-sm:mb-10 max-sm:justify-center sm:pl-5">
         <p className="text-[2.5rem] max-sm:text-center text-green  px-4">We Are Sha&apos;p Braai</p>
<p className="my-5 max-sm:text-center text-black  px-4">
    At Sha&apos;p Braai, we pride ourselves on serving the best fast food in town. Our menu is filled with a variety of delicious options, from our mouth-watering kotas to our succulent steaks. But what we&apos;re most famous for is our braai. Cooked to perfection and bursting with flavor, our braai is a crowd favorite and a must-try for all meat lovers. Come join us at Sha&apos;p Braai and experience the best of fast food.
</p>

<p className="my-5 max-sm:text-center text-black  px-4">
                    Our commitment to quality and flavor extends beyond our food. We strive to provide an exceptional dining experience for all our customers. From our friendly and attentive staff to our cozy and inviting atmosphere, every detail is designed with your satisfaction in mind. Whether you&apos;re here for a quick bite or a leisurely meal, we look forward to serving you at Sha&apos;p Braai.
                </p>
                <button className="btn-primary">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default About