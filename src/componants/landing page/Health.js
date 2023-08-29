import '../Styles/health.css'
import logo from '../Images/logo.png'
import f from '../Images/f.png'


const Health = () => {
    return (<>
        <div >
            <div className="title">
                <div>
                    <p>Health Products</p>
                </div>
                <div>
                    <button><p>View All  </p></button>
                </div>

            </div>
            <div className='content_wrapper'>
                <div className="content">
                    <div >
                        <img src={f} />

                    </div>
                    <div className='package'>
                        <div className='package_name'>
                            <p>Basic Health Package</p>
                        </div>
                        <div className='ideal'>
                            <p>
                                ideal for indivisual age 21-40...
                            </p>
                        </div>
                    </div>

                </div>
                <div className="content">
                    <div>
                    <img  src={f} />
                    </div>

                   


                    <div className='package'>
                        <div className='package_name'>
                            <p>Fever panel</p>
                        </div>
                        <div className='ideal'>
                            <p>
                            ideal for indivisual age 21-40...
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    </>)
};
export default Health;