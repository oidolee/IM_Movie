
import React, {Component} from 'react';
import storeBanner from '../../assets/page_3/storeBanner.jpg'
import '../../styles/page_3/StoreList.css'

class MainBody extends Component{
    render(){
        return(
            <div className='store'>
                <div className='storeBanner'>
                    <img src={storeBanner}></img>
                </div>

                <div className='contents'>
                    <div className='second_menu'>
                        <li><a href='page_1'>베스트</a></li>
                        <li><a href='page_2'>관람권</a></li>
                        <li><a href='page_3'>스낵음료</a></li>
                    </div>

                </div>
            </div>

        );
    }
}

export default MainBody;