import { Product } from '../product/Product';
import './productsList.css';
import firstImg from '../../assets/image/products/photo.png';
import secondImg from '../../assets/image/products/orig.png';
import thirdImg from '../../assets/image/products/orig (2).png';

export const ProductsList = () => {
    return (
        <div className="container">
            <h2>
                {' '}
                <span>Популярные</span> товары
            </h2>
            <ul className="productsList">
                <Product
                    title="PowerShot SX620 HS"
                    model="Canon"
                    img={firstImg}
                />
                <Product
                    title="PowerShot SX620 HS"
                    model="Canon"
                    img={thirdImg}
                />
                <Product
                    title="PowerShot SX620 HS"
                    model="Canon"
                    img={secondImg}
                />
            </ul>
        </div>
    );
};
