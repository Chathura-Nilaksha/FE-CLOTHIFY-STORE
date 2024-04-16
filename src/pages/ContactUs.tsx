import ClothifyHeader from "./ClothifyHeader";
import HeaderCompo from "./HeaderCompo";

export default function ContactUs(){
    
    return(
        <div>
            <div className="conrainer">
                <div className="raw text-center" >
                    <ClothifyHeader/>
                </div>
            </div>
            
            <div className="conrainer">
                <div className="raw text-center">
                    <HeaderCompo/>
                </div>
            </div>
           
            Contact us page
        </div>
    );
}