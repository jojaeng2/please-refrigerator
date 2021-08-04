import "../../style/rfgpage/rfg.css";


function Func_filterbutton_find_button({item, src, onClick,settoggle,setidg}) {
    const clickimg = ()=>{
        setidg(item);
        onClick();
    }

    return (
        <>
        <div className="ingredient-form">
            <div className="ingredient-img-form" role="button" onClick={(e)=>{clickimg()}}>
                <img className="ingredient-img" src={src} alt={item}/>
            </div>
            <div className="ingredient-name-form">        
                <span className="ingredient-name" children={item}></span>
            </div>
        </div>
        </>
    );
}

export default Func_filterbutton_find_button;