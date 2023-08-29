import '../Styles/home.css'
import Nav from './Nav';
import Doctors from './Doctors';
import Products from './Products'
import Health from './Health';
import Medications from './Medications';
import Consultation from './Consultaion';
import { useState } from 'react';
import glass from '../Images/magnifying-glass_2811806.png'
import bell from '../Images/8666714_bell_icon.png'
import doc from '../Images/doc3.jpg'


const Home = () => {
    const [name,setName]= useState("Jubed Ahemad")
    return (
        <>
            <div className='main_wrapper'>
                <div className="searchbar">
                    
                    <div className='dropdown'>
                        <p>Default</p>

                    </div>
                    <div className='search'>
                        <img src={glass}/>
                       
                        <input type="searchbydoctorsname/speciality" value={"search"}/> 
                    </div>
                    <div className='notify'>
                        <img src={bell}/>
                        
                    </div>
                    <hr/>
                    <div className='notifi-img'>
                        <img src={doc}/>
                    </div>
                    
                    

                </div>
                <hr/>
                <div className='welcome_msg'>
                   <div className='msg'>
                    <p>welcome Back</p>
                   </div>
                   <div className='name'>
                   <p>{name}</p>
                   </div>

                </div>


                <div className='layOut'>
                    <div className='wrapper'>
                        <div className='doctors'>
                            <Doctors />
                        </div>
                        <div className='medication'>
                            <Medications />
                        </div>
                    </div>


                    <div className='wrapper_1'>
                        <div className='products'>
                            <Products />
                        </div>
                        <div className='health'>
                            <Health />
                        </div>
                        <div>
                            <Consultation />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;