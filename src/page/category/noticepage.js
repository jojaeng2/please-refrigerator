import React, { useState, useEffect } from "react";
import '../../style/noticepage/noticepage.css';
import notice from '../../img/category_notice_img/notice_img.jpg';
import Func_noticeboard_show_noticeboard from '../../components/noticepage/noticeboard';
import Func_freeboard_show_freeboard from '../../components/noticepage/freeboard';
import Axios from "axios";

function App({ history }) {

  const [noticeboardtoggle, setnoticeboardtoggle] = useState(false);
  const [freeboardtoggle, setfreeboardtoggle] = useState(true);
  const [notice_table, set_notice_table] = useState();
  const [free_table, set_free_table] = useState([
    {id: '1', nickname: 'jenny', title: "초밥", description: "밥에다가 연어를 올린다.", createdate: '2021-07-01'},
    {id: '2', nickname: 'rose', title: "라멘", description: "물을 끓이고 면을 넣는다.", createdate: '2021-07-16'},
    {id: '3', nickname: 'jisoo', title: "돈까스", description: "밀가루를 튀긴다.", createdate: '2021-07-29'},
    {id: '4', nickname: 'lisa', title: "삼겹살", description: "고기를 굽는다.", createdate: '2021-08-08'}
  ]);

  // Axios.post("/getnotice", {})
  // .then((response) => {
  //     set_notice_table(response.data)
  // })
  // .catch((error) => {
  //     console.log(error);
  // });

  // Axios.post("/getfree", {})
  // .then((response) => {
  //     set_free_table(response.data)
  // })
  // .catch((error) => {
  //     console.log(error);
  // });

  const Func_noticepage_move_writeform = (e) => {
    history.push('/writeform');
  }

  // 공지사항
  const Func_noticepage_toggle_noticeboard = () => {
    setnoticeboardtoggle(true);
    setfreeboardtoggle(false);
    document.querySelector('.noticeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.freeboard-select-btn').classList.remove('selectedboard-btn');
  }

  // 자유게시판
  const Func_noticepage_toggle_freeboard = () => {
    setnoticeboardtoggle(false);
    setfreeboardtoggle(true);
    document.querySelector('.freeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.noticeboard-select-btn').classList.remove('selectedboard-btn');
  }

  return (
    <div className="notice-form">
      {/* 상단 이미지 */}
      <div className="notice_img_box">
        <img src={notice} width="100%" height="100%" />
        <div className="community"><h1>Community</h1></div>
      </div>
      <div className="subcontent-form">
        <div className="notice-nav-form">
          <div className="notice-nav">
            <div role="button" className="noticeboard-select-btn" onClick={Func_noticepage_toggle_noticeboard}>공지사항</div>
            <div role="button" className="freeboard-select-btn selectedboard-btn" onClick={Func_noticepage_toggle_freeboard}>자유게시판</div>
        </div>
        </div>
        <div className="maincontent-form">
          {noticeboardtoggle && <Func_noticeboard_show_noticeboard notice_table={notice_table} />}
          {freeboardtoggle && <Func_freeboard_show_freeboard free_table={free_table} history={history}/>}
        </div>
      </div>
      <button onClick={Func_noticepage_move_writeform}>게시글 작성하기</button>
    </div>
  );
}

export default App;
