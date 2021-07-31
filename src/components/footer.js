import React from 'react';
import '../style/footer.css';
import this_header_show_logo from '../logo.png';
import this_header_show_rgfimg from '../rfgimg.jpeg';


// const movies = [
//     {
//       title:"완벽한 타인",
//       poster:"http://www.newsinstar.com/data/photos/20180937/art_15367158497873_e15bff.jpg"
//     },
//     {
//       title:"보헤미안 랩소디",
//       poster:"http://image.cine21.com/resize/cine21/poster/2018/0518/12_06_54__5afe434e1f297[H800-].PNG"
//     },
//     {
//       title:"창궐",
//       poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9te4ZPkCjmfMbzua__AogoVkO8_pSQg_k9HLioQM6B2lPPnix7w"
//     },
//     {
//       title:"암수살인",
//       poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpaFaBzed4mShvSJPVD2vQf4W618DFT8OFa-KNAPTuJLTWi5x"
//     },
//     {
//       title:"미쓰백",
//       poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53iAJpVivS5RAVVNB_MoEs_a6sTOcbv2tA2XhNgz6ovcj6Yeq"
//     }
//   ]

function footer() {
    
  return (
      <>
      <div className= "food_big_block">
        <div className = "food_img_block_up">
            {/* <div className="food">
                {movies.map(movie =>{
                return < {movie.title} />
            })}
            
            </div> */}
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
        </div>
        
        <div className = "food_img_block_down">
        <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>

            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>

            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>

            <div className="food">
                <img src={this_header_show_logo} width='120' height='120' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>

        </div>
        </div>
        </>
  )
}
    
export default footer;