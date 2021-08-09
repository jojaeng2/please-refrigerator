import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'

function Func_freeboard_show_freeboard({ history, free_table }) {

    const Func_freeboard_show_eachcontent = () => {
        return (
            <>
                {free_table && free_table.map(({id, nickname, title, description, createdate}) => {
                    return (
                        <div className="eachcontent-block" /*onClick={() => history.push("/freeboard/" + id)}*/>
                            <div className="eachcontent" border-color="#008554">
                                <div className="content-header"> 
                                    <div className="nickname">{nickname}</div>
                                    <div createdate="createdate">{createdate}</div>
                                </div>
                                <div className="content-maincontent">
                                    <div className="title">{title}</div>
                                    <div className="description">{description}</div>
                                </div>
                                <div className='reaction-box'>
                                    <img src={heart_img} width='30px'/>
                                    <span>14</span>
                                    <img src={comment_img} width='27px'/>
                                    <span>37</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        // 4개 묶는 div
        <div className="allcontent-block">
          <Func_freeboard_show_eachcontent/>
        </div>
      )
  }
  
export default Func_freeboard_show_freeboard;