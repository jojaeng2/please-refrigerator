import React from 'react';
import '../../style/mainpage/footer/footer.css';


function footer({ showtable }) {
    console.log(showtable)

    const Show = () => {
        let count = 0
        const arr = []

        showtable && showtable.map((v) => count < 8 ? (count += 1, arr.push(<Showimg key={v.FoodN} img={v.FoodV} t={v.FoodT} c={v.FoodC}name={v.FoodN}></Showimg>)) : 0)
        return (
            <div>
                {arr}
            </div>
        )
    }

    const Showimg = ({ img, name,t,c }) => {
        console.log(c)
        return (
            <div className="footer_block">
                <div className="footer_food">
                    <img className="footer_food_img" src={img} width='130' height='130' />
                </div>

                <div className="footer_text">
                    <p className="footer_text_style"> {name} </p>
                    <p className="footer_text_style">  {c && c.includes('.') ? c.includes('kcal') ? c : c+'l' : ''} <br/></p>
                    <p className="footer_text_style"> {t} </p>
                </div>
            </div>
        )

    }

    return (
        <>
            <div className="food_big_block">
                    <Show/>
                    {/*  footer_block 하나가 음식 박스 한개  */}
            
            </div>
        </>
    )
}

export default footer;