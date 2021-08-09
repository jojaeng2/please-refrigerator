function Func_noticeboard_show_noticeboard() {
    
    const notice_list = [
        [1, "주요가이드| 음식 사진이 뜨지 않을 때", "2021-07-11"],
        [2, "주요가이드| RefriBank 주요기능", "2021-04-15"],
        [3, "주요가이드| 냉장고에 음식이 사라짐", "2021-03-29"],
      ];
    
      function Func_notice_title() {
        return (
          <div className="each_content">    
            <div className="notice_no">No</div>
            <div className="notice_title_a">제목</div>
            <div className="notice_day">등록일</div>
          </div>
        );
      }
    
        function Func_notice_content({no, title, day}) {
          return (
            <div className="each_content">    
              <div className="notice_no">{no}</div>
              <div className="notice_title"><a href="">{title}</a></div>
              <div className="notice_day">{day}</div>
            </div> 
          );
      
        }

    return (
        <div className="notice-box">
          <div className="main-content">
              <Func_notice_title/>
              {notice_list.map(v => <Func_notice_content no={v[0]} title={v[1]} day={v[2]}/>)}
          </div>
        </div>
    );
}

export default Func_noticeboard_show_noticeboard;