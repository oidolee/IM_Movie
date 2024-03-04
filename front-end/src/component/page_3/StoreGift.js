import React, { Component } from 'react';
import '../../styles/page_3/StoreGift.css'
import package1 from '../../assets/page_3/package1.jpg'
import cancel from '../../assets/page_3/cancel.png'


class StoreGift extends Component {

    closeStoreGift = () => {
        const { onClose } = this.props;
        onClose(); // 부모 컴포넌트에게 모달 닫기 이벤트 전달

        
    };


    
    render() {
        return (
<div id="layerCouponGift" className="layer_wrap layer_coupon_gift active" >
    <strong className="hidden">레이어 팝업 시작</strong>
            <strong className="hidden">레이어 팝업 시작</strong>

            <div className="layer_header">
                <h4 className="tit">선물하기123</h4>
                <button type="button" className="btn_close" onClick={this.closeStoreGift}>
                    <img src={cancel} alt="팝업 닫기"/>
                </button>
            </div>


            <div className="coupon_gift_top">
                <div className="bx_thm">
                    <img src={package1} alt="[롯시와 봄] 패키지"/>
                </div>
                <div className="bx_tit">
                    <strong>[롯시와 봄] 패키지</strong>
                    <span>총 수량 0개</span>
                </div>
                <div className="bx_cnt">
                    <dl className="total_price">
                        <dt>총 합계</dt>
                        <dd><strong>0</strong>원</dd>
                    </dl>
                </div>
            </div>
                

</div>

        );
    }
}

export default StoreGift;
