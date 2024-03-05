import React, {Component} from 'react';
import style from  '../../styles/main/MainBody.module.css'

import slide_1 from '../../assets/main/slide_1.jpg'
import Main_Swiper from "./Main_Swiper";

class MainBody extends Component{
    render(){
        return(
            <div>
                <div className='slide_box'>
                    <Main_Swiper />
                </div>
                <div className={`MainBody_contents ${style.MainBody_contents}`}>contents</div>
            </div>
        );
    }
}
  
export default MainBody;