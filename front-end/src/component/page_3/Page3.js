
import React, {Component} from 'react';
import storeBanner from '../../assets/page_3/storeBanner.jpg'
import package1 from '../../assets/page_3/package1.jpg'
import '../../styles/page_3/StoreList.css'

class Page3 extends Component{
    render(){
        return(
            <div className='store'>
                <div className='storeBanner'>
                    <img src={storeBanner}></img>
                </div>

                <div className='contents'>
                    <div className='second_menu'>
                        <li style={{ width: '33%', left: '0' }}><a href='page_1' >베스트</a></li>
                        <li style={{ width: '33%', left: '0' }}><a href='page_2' >관람권</a></li>
                        <li style={{ width: '33%', left: '0' }}><a href='page_3' >스낵음료</a></li>
                    </div>

                    <div className='store2'>
                        <h3 className='store_title'>베스트</h3>

                        <a href="/StoreDetail" className="store_item">
                            <div className='store_img'>
                                <img src={package1}></img>
                            </div>
                            <div className="item_content">
                                <div className="badge_wrap"></div>
                                <div className="item_title">
                                <h4>[IM과 봄] 패키지</h4>
                                <p>2D일반관람권 2매</p>
                                </div>
                                <div className="txt_price_wrap">
                                    <span className="txt_sale">15%&nbsp;</span>
                                    <span className="txt_price">22,000<em>원</em></span>
                                    &nbsp;
                                    <span className="txt_price_ins">26,000원</span>
                                    &nbsp;
                                </div>
                            </div>
                        </a>
                    </div>

                    
                </div>
            </div>

        );
    }
}

export default Page3;