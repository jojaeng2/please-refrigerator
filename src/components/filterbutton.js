import '../style/FilterFinderButton.css';

function Func_filterbutton_find_button({href,Item,basketInput}) {

    return (
        <ul>
            <li><img role="button" onClick={(e)=>{basketInput(Item, e, href)}} src={href} alt=""/></li>
            
        </ul>
    );
}

export default Func_filterbutton_find_button;
