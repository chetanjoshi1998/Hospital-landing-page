import '../Styles/doctors.css'
import doc from '../Images/doc2.jpg'
import doc2 from '../Images/doc2.jpg'
import doc3 from '../Images/doc3.jpg'


const info = [
    {
        name: "Dr.Darlen Robertson",
        image: doc,
        speciality:"Dental Specialist",
        rating: "5.0",
        reviews: "56 M +reviews"

    },
    {
        name: "Dr.cameron williamson",
        speciality:"Dental Specialist",
        image: doc2,
        rating: "5.0",
        reviews: "85 M +reviews"

    },
    {
        name: "Dr.Darel stiward",
        speciality:"Heart Specialist",
        image: doc3,
        rating: "5.0",
        reviews: "70 M +reviews"

    },
    {
        name: "Dr.Darlen Robertson",
        speciality:"Dental Specialist",
        image: doc2,
        rating: "5.0",
        reviews: "58 M +reviews"

    }]




const Doctors = () => {
    return (<>
        <div className='container'>
           <div className='wrapper'>
           <div className='doc-title'>
                <p>Top Doctors</p>
            </div>
            <div>
               <button><p>View all</p></button>
            </div>
           </div>
            <div className="DocName">
                <div>
                    {
                        info.map((elem, id) => {
                            return (
                                <>
                                    <div className='doc-card' key={id}>
                                        <div className='card_info'>
                                            <img src={elem.image}/>
                                            <div >
                                                <div className='doc_name'>
                                                    <p>{elem.name}</p>
                                                </div>
                                                <div className='speciality'>
                                                    <p>{elem.speciality}</p>
                                                </div>
                                                <div className='rating'>
                                                    <p>{elem.rating}</p>
                                                </div>
                                                <div className='reviews'>
                                                    <p>{elem.reviews}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                    }

                </div>


            </div>

        </div>

    </>)
};
export default Doctors;