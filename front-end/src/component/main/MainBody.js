import React, {Component} from 'react';
import '../../styles/main/MainBody.module.css'

import slide_1 from '../../assets/main/slide_1.jpg'
import Main_Swiper from "./Main_Swiper";

class MainBody extends Component{
    render(){
        return(
            <div>
                <div className='slide-box'>
                    <div className='slide_1'>
                        <img src={slide_1}></img>
                        <Main_Swiper />
                    </div>

                </div>
                <div className='contents'>contents</div>
            </div>
        );
    }
}
  
export default MainBody;