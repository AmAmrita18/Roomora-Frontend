import React, {useState} from "react";
import { estates } from "./estates.js";
import { FaBed, FaHashtag } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnBlack from "../../components/Buttons/BtnPurple.jsx";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

const PropertiesCard = ({isHome = false}) => {
const [currentPage, setCurrentPage] = useState(1);

const recordsPerPage = isHome ? 3 : 6;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage
const records = estates.slice(firstIndex, lastIndex);
const nPage = Math.ceil(estates.length / recordsPerPage);
const numbers = [...Array(nPage + 1).keys()].slice(1);

function prevPage(){
  if(currentPage !== firstIndex){
    setCurrentPage(currentPage - 1);
  }
}
function changeCurrentPage(id){
  setCurrentPage(id);
}
function nextPage(){

  if(currentPage !== lastIndex){
    setCurrentPage(currentPage + 1);
  }
}

  return (
    <div className="w-full flex flex-col pt-16">
      <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
        {records.map((est, idx) => (
         ((isHome && idx <=2) || !isHome) && <Link to={`/property/${est.id}`} key={est.id}>
            <div
              key={est.id}
              className="flex flex-col shadow-2xl  transition-all duration-700 ease-in-out  hover:scale-95 cardsStyling"
            >
              <img
                src={est.images[0]}
                alt="thumbnail"
                className="w-full h-52 object-cover rounded-xl brightness-90"
              />
              <h3 className="text-primaryText text-[24px] py-4 leading-[27.65px] tracking-[-0.6px] ">
                {est.title}
              </h3>
              
              <div className="flex flex-row justify-between  py-4">
                <div className="text-primaryText">
                  <h1>Price</h1> 
                  <h1>{est.price}</h1>                
                </div>
                <BtnBlack
                  onClick={() => alert("Contact Us button clicked!")}
                  className=""
                >
                  View Details
                </BtnBlack>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
      <div className="flex gap-2 items-center justify-center pt-10">
          <button disabled={currentPage===1} onClick={() => prevPage()} className="mr-3 text-[40px] text-backgroundDark border border-purple bg-purple rounded-full "><FaCircleArrowLeft />
          </button>
         {
          numbers.map((n, i) =>(
            (<div className="" key={i}>
              <button onClick={() => changeCurrentPage(n)} className={`text-primaryText px-3 w-[35px] rounded-xl border border-borderCol   bg-backgroundDark text-[20px] ${currentPage === n ? 'bg-purple':""} `}>{n}</button>
            </div>)
          ))
         }
          <button disabled={currentPage===nPage} onClick={() => nextPage()} className="ml-3 text-[40px] bg-purple text-backgroundDark rounded-full "><FaArrowCircleRight />
          </button>
        </div>
    </div>
  );
};

export default PropertiesCard;
