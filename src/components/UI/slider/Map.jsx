 
 
function Testimonials() {
 

  return (
<div className="flex flex-col justify-center items-center pt-20">
  <div className="px-2 py-2">
        <h3 className="  text-3xl font-semibold mb-3  text-green">Contact</h3>
        {/* <p className="text-3xl">What our <span className="font-bold text-red-500">customers</span> are saying</p> */}
      </div> 
       
      <div className='flex justify-between flex-wrap-reverse gap-10 px-30'>
      <div className="sm:w-1/2 max-sm:flex flex-wrap max-sm:mb-10 max-sm:justify-center sm:pl-0">
   <p className="text-[2.5rem] max-sm:text-center ">We Are Available</p>
                <p className="my-5 max-sm:text-center">
 
</p>
   <p className="my-5 max-sm:text-center max-sm:px-0">
    Sha&apos;P Braai  Restaurant
    <br/>
    264 Main & CNR Kruger Str, Maboneng Precint, Johannesburg
    <br/>
    Open: Monday - Sunday, 8:00 AM - 10:30 PM
    <br/>
    Phone:    +27 81 717 1519
    <br/>
    Email:             info@shapbraai.co.za
</p>
  <p className="my-5 max-sm:text-center">
    Experience the joy of exceptional dining with our exquisite menu, welcoming atmosphere, and outstanding service. Your table at Sha&apos;p Braai  Restaurant is waiting!
</p>
                <button className="btn-primary"> </button>
            </div>
      <div className='md:flex-1 w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229338.25696380902!2d28.26215437177734!3d-26.085523089668257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1719866975695!5m2!1sen!2sza"
                    height="auto"
                    allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-full'
                ></iframe>

 
            </div>
      </div>

      </div>
  );
}

export default Testimonials;
