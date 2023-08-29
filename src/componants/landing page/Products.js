import '../Styles/product.css'
import medi1 from '../Images/medi1.jpg'
import medi2 from '../Images/medi2.jpg'
import medi3 from '../Images/medi3.jpg'


const detail = [
    {
        image: medi1,
        title: 'Necessaire 75ML',
        value1: '$27.60',
        value2: '$34.7'

    },
    {
        image: medi2,
        title: 'Mario 118Ml',
        value1: '$25.70',
        value2: '$32.60'

    },
    {
        image: medi3,
        title: 'Allergy relief 25mg',
        value1: '$25.70',
        value2: '$32.60'

    }
]


const Product = () => {
    return (<>
        <div>
            <div className='title'>
                <div>
                    <p>Popular Products</p>
                </div>
                <div className='all-products'>
                   <button> <p>View All</p></button>
                </div>

            </div>
            {
                detail.map((elem, id) => {
                    return (
                        <>
                            <div key={id} className='details'>
                                <div>
                                    <img src={elem.image}/>
                                </div>
                                <div className='mediname'>
                                    <p>{elem.title}</p>
                                </div>
                                <div className='val1'>
                                    <p>{elem.value1}</p>
                                </div>
                                <div className='val2'>
                                    <p>{elem.value2}</p>
                                </div>


                            </div></>
                    )
                })
            }
        </div>


    </>)
};
export default Product;