import Quick from "../../assets/imagesAll/res-logo.png";
import Pick from "../../assets/images/pick.png";
import Dine from "../../assets/images/Dine.png";
import   { useEffect, useState, useRef } from 'react';
export const Delievery = () => {
    const [loaded, setLoaded] = useState({dine: false, quick: false, pick: false});
    const dineRef = useRef();
    const quickRef = useRef();
    const pickRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLoaded(prevLoaded => ({...prevLoaded, [entry.target.id]: true}));
                }
            });
        });
    
        if (dineRef.current) {
            observer.observe(dineRef.current);
        }
        if (quickRef.current) {
            observer.observe(quickRef.current);
        }
        if (pickRef.current) {
            observer.observe(pickRef.current);
        }
    
        return () => {
            observer.disconnect();
        };
    }, []);
    return(
        <div className="flex flex-wrap flex-col pt-32 px-10">
            <div className="flex flex-col  justify-center items-center gap-5">
                <div className="">
                    <h3 className="text-3xl font-semibold mb-2">Your <b className="text-red-500">Favorite</b> Dishes,</h3>
                    <h3 className="text-2xl text-center">Just a <b className="text-red-500">Click</b> Away</h3>
                </div>
                <div className="text-center">
                    <p>Order Delicious Meals, Quick and easy on our Whatsap Number</p> 
                    <p>No more waiting in long lines. Get your favorite meals  in no time, hassle-free.</p>
                </div>
            </div>
            <div className="py-5 flex flex-wrap justify-evenly">
          
<div className={`flex flex-col p-5 ${loaded.dine ? 'fade-from-left-mobile loaded' : 'fade-from-left-mobile'}`}>
<div id="dine" ref={dineRef} style={{opacity: loaded.dine ? 1 : 0, transform: loaded.dine ? 'translateX(0)' : 'translateX(-100px)', transition: 'opacity 5s, transform 5s'}}>
        <img src={Dine} alt="" width={100} height={100}/>
    </div>
    <div className="">
        <h4 className="text-xl font-semibold">Super Dine In</h4>
        <span>Elevate Your Culinary Experience!</span>
    </div>
</div>
<div className={`flex flex-col p-5 ${loaded.dine ? 'fade-from-right-mobile loaded' : 'fade-from-right-mobile'}`}>
    <div id="dine" ref={dineRef} style={{opacity: loaded.dine ? 1 : 0, transform: loaded.dine ? 'translateY(0)' : 'translateY(-100px)', transition: 'opacity 5s, transform 5s'}}>
        <img src={Quick} alt="" width={100} height={100}/>
    </div>
    <div className="">
        <h4 className="text-xl font-semibold">Tasty Food</h4>
        <span>Your Cravings, Right on Time!</span>
    </div>
</div>
 <div className={`flex flex-col py-10 p-5 ${loaded.dine ? 'fade-from-left-mobile loaded' : 'fade-from-left-mobile'}`}>
              <div id="dine" ref={dineRef} style={{opacity: loaded.dine ? 1 : 0, transform: loaded.dine ? 'translateX(0)' : 'translateX(100px)', transition: 'opacity 5s, transform 5s'}}>
                        <img src={Pick} alt="" width={100} height={100}/>
                    </div>
                    <div className="">
                        <h4 className="text-xl font-semibold">Easy Pick Up</h4>
                        <span>Effortless Pickup: Grab and Go!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}