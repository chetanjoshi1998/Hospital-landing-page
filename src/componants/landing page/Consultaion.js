import '../Styles/consultaion.css'
import doc from '../Images/doc3.jpg'

const Consultation = () => {
    return (<>
        <div>
            <div className='consult-title'>
                <p>
                    Upcoming consultation
                </p>
            </div>
            <div className='card'>
                <div>
                    <img src={doc} />
                </div>
                <div className='docConsult-title'>
                    <div className='Doc_name'>
                        <p>
                            Dr.Darlen Robertson
                        </p>
                    </div>
                    <div className='Doc_speciality'>
                        <p>
                            Dental Specialist
                        </p>
                    </div>
                    <div className='date'>
                        <input type='date'></input>
                    </div>
                    <div className='buttons'>
                        <div>
                            <button>cancel</button>
                        </div>
                        <div className='reshed'>
                            <button>Reshedule</button>
                        </div>
                    </div>
                </div>
                {/* <div className='card_button'>
                    <div>
                        <button>cancel</button>
                    </div>
                    <div>
                        <button>Reshedule</button>
                    </div>
                </div> */}

            </div>
        </div>

    </>)
};
export default Consultation;