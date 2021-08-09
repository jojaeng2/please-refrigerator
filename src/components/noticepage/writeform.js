import '../../style/noticepage/writeform.css';

import {useState} from 'react';
import Axios from 'axios';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from "react-router-dom";

// import ReactHtmlParser from 'react-html-parser';

function Func_writeform_write_des() {

    const [freeinputdes, setfreeinputdes] = useState({
        id: "",
        title: '',
        description: ''
    });

    const getValue = (e) => {
        const { name, value } = e.target;
        setfreeinputdes({
            ...freeinputdes,
            [name]: value
        })
        console.log(freeinputdes);
    };

    
    const Func_writeform_post_freeinputdes = (e) => {
        console.log(1);
        Axios.post("http://qkrtmfqls.gabia.io/addfree", {
            id: freeinputdes.id,
            title: freeinputdes.title,
            description: freeinputdes.description
        })
        .then((response) => {
            console.log(2);
            <Redirect to="/noticepage"></Redirect>
        })
        .catch((error) => {

        });
    }

    return (
        <div className="Apple">
            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
                <CKEditor
                editor={ClassicEditor}
                data="초기값"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setfreeinputdes({
                      ...freeinputdes,
                      description: data
                    })
                }}
                />
            </div>
            <button className="submit-button" onClick={() => {Func_writeform_post_freeinputdes()}}>입력</button>
        </div>
    );
}

export default Func_writeform_write_des;