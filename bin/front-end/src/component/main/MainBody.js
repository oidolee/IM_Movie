import React, {Component} from 'react';
import '../../styles/main/MainBody.css'
import slide_1 from '../../assets/main/slide_1.jpg'

class MainBody extends Component{
    render(){
        return(
            <div>
                <div className='slide-box'>
                    <div className='slide_1'>
                        <img src={slide_1}></img>
                        
                    </div>

                    <div className='contents'>contents</div>
                </div>
            </div>
        );
    }
}

export default MainBody;