import React from 'react'
import '../../style/mainpage/footer/footer.css'


function footer({ ftable, history }) {
  // console.log(showtable)

  const Show = () => {
    return (
      <div>
        {ftable && ftable.slice(0, 8).map(({ FoodId, FoodV, FoodN, FoodT, FoodC }) => {
         return (
            <>
              <div className="footer_block" onClick={() => history.push("/recipe/" + FoodId)}>
                <div className="footer_food">
                  <img className="footer_food_img" src={FoodV} />
                </div>

                <div className="footer_text">
                  <p className="footer_text_style1"> {FoodN} </p>
                  <p className="footer_text_style2">
                    {' '}
                    {FoodC && FoodC.includes('.') ? (FoodC.includes('kcal') ? FoodC : FoodC + 'l') : ''}{' '}
                    <br />
                  </p>
                  <p className="footer_text_style3"> {FoodT} </p>
                </div>
                  </div>
            </>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="food_big_block">
        <Show />
        {/*  footer_block 하나가 음식 박스 한개  */}
      </div>
    </>
  )
}

export default footer