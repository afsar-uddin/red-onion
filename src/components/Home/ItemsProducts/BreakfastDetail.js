import { React, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const BreakfastDetail = () => {
    const { breakfastid } = useParams();
    const [breakfastDetail, setBreakfastDetail] = useState({});
    const [count, setCount] = useState(1)


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${breakfastid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBreakfastDetail(data.meals[0]))
    }, []);


    let counter = 1;
    const increament = () => {
        counter = counter + 1;
        console.log('function from', counter)
        setCount(counter);
        // return setCount(counter)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="item-detail">
                        <div>
                            <h3>{breakfastDetail.strMeal}</h3>
                            <p>{breakfastDetail.strInstructions}</p>
                            <p>Price $<span className="price">29.99</span></p>
                            <button className="add-to-cart">Add to cart</button>
                            <div className="inc-dec">
                                <button onClick={increament}>+</button>
                                <span>1</span>
                                <button>-</button>
                            </div>
                        </div>
                        <div>
                            <img src={breakfastDetail.strMealThumb} alt={breakfastDetail.strMeal} />
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BreakfastDetail;