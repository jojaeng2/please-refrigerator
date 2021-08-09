import "../../style/recipe/recipe.css";
import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";

function thumbnail_info({ data }) {
    //foodid 는 axios요청할때 푸드아이디
    const set_show_recipe_igdcnt = () => {
        const igdcnt_list = [];
        let indexKey = 0;
        for(let key in data[0]) {
            indexKey += 1;
            if(key.includes("IgdC") && data[0][key] != null) {
                let recipe_thumbnail_classname = "recipe-thumbnail-idg-li";
                let now_str = key; 
                (parseInt(now_str.charAt(now_str.length-1))) % 2 == 0 ? recipe_thumbnail_classname += '-even' : recipe_thumbnail_classname += '-odd';
                igdcnt_list.push(
                    <div key={indexKey} className={recipe_thumbnail_classname}> 
                        <div>
                            {data[0][key.replace("C", "N")]} 
                        </div>
                        <div>
                            {data[0][key]}
                        </div>
                    </div>
                );
            }
        }
        return igdcnt_list;
    }

    const kcal_time_indicator = (val, maxval) => {
        
        return (
            <ReactStoreIndicator
                width={130}
                value={parseInt(val)}
                maxValue={maxval}
                stepsColors={[
                    '#27ae60',
                    '#2ecc71',
                    '#f1c40f',
                    '#f39c12',
                    '#e67e22',
                    '#d35400',
                    '#e74c3c',
                    '#c0392b',
                ]}
            />
        )
    }

    
    const set_show_kcal_time = () => {
        return (
            <>
                <div className="recipe-thumbnail-graph">
                    {data[0].FoodC !== "" ?
                        <div className="recipe-thumbnail-graph-kcal">
                            <div className="recipe-thumbnail-graph-text">
                                칼로리
                            </div>
                            {kcal_time_indicator(data[0].FoodC, 3000)}
                        </div> : ''}
                    {data[0]["FoodT"] !== "" ?
                        <div className="recipe-thumbnail-graph-time">
                            <div className="recipe-thumbnail-graph-text">
                                분
                            </div>
                            {kcal_time_indicator(data[0].FoodT, 180)}
                        </div> : ''}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="recipe-body-form">
                <div className="recipe-thumbnail-form">
                    <div className="recipe-title-form">
                        <div className="recipe-title-content">
                            <span>{data[0].FoodN}</span>
                        </div>
                        <div className="recipe-thumbnail-content-form">
                            <div className="recipe-thumbnail-text-form">
                                {set_show_kcal_time()}
                                <div className="recipe-thumbnail-idg-form">
                                    {set_show_recipe_igdcnt()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-thumbnail-img-form">
                        <div className="recipe-thumbnail-img-upbox">
                            <img src={data[0].RcpI1}></img>
                        </div>
                    </div>
                    <div className="recipe-thumbnail-blank">
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default thumbnail_info;
