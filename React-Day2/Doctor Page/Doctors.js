
import './Doctors.css'
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';
function  Doctors()
{

let doctorArray =[
    {"rating":4,"doctorname":"Arnav", "doctorSurname": "Sharma", "designation":"cardio","avatar":pic7},
    {"rating":4,"doctorname":"Aryan", "doctorSurname": "Garg","designation":"ortho" ,"avatar":pic2},
    {"rating":5,"doctorname":"Chatak","doctorSurname": "Shinde", "designation":"optha","avatar":pic3},
    {"rating":3,"doctorname":"Krishna", "doctorSurname": "Taneja", "designation": "uro","avatar":pic4},
    {"rating":3,"doctorname":"Anu", "doctorSurname": "Patil", "designation":"neuro","avatar":pic1},
    {"rating":4,"doctorname":"Yashi", "doctorSurname": "Verma", "designation":"pedia","avatar":pic6},
    {"rating":1,"doctorname":"Yaman", "doctorSurname": "Birla", "designation":"ortho","avatar":pic5},
    {"rating":2,"doctorname":"Prateek", "doctorSurname": "Patidar", "designation":"pedia","avatar":pic8},
];

   const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} style={{color:"green"}}>*</span>);
    }
    return stars;
};

   let  resultsArray = doctorArray.map((item, index) => 
   {
       return <div className ='container'><div  className='card' key={index}>                       
                   <img src={item.avatar}   /> <br/>
                   <span  className="name">{item.doctorname + " " + item.doctorSurname}</span>  <br/>
                   <span className="designation">{item.designation}</span>  <br/>
                   <p>{renderStars(item.rating)}</p>
                   <button id='submit' value="Book Appointment"> Book Appointment </button>
               </div>
               </div>;
   });

   return (
    <>
         <h3 style={  {color:"red",  padding:"5px", textAlign:"center"}  }>Doctors List</h3>
         <hr/>


        {resultsArray}    

        
    </>
   );


}

export default Doctors;
  