import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'
import bgImage1 from './images/背景图1.png'
import bgImage2 from './images/背景图2.png'
import bgImage3 from './images/背景图3.png'
import bgImage4 from './images/背景图4.png'


class HomeBanner3 extends React.Component {
    constructor(props, context){
        super(props, context)
    }



    render(){
        return (
            <div class="three-banner">
                <ul ref={ref => {
                    let div = ref.querySelectorAll('.three-banner div')
                    for(var i = 0; i < div.length; i++){
                        div[i].addEventListener('mouseover', function (e) {
                            this.style.paddingTop = '100px';
                            this.style.backgroundColor = 'rgba(84,194, 240, 0.8)';
                            this.querySelector('p').style.display = 'block';
                            this.querySelector('h3').style.marginTop = '40px';
                        }, false)
                        div[i].addEventListener('mouseout', function (e) {
                            this.style.paddingTop = '200px';
                            this.style.backgroundColor = 'rgba(88, 88,88, 0.4)';
                            this.querySelector('p').style.display = 'none';
                            this.querySelector('h3').style.marginTop = '60px';
                        }, false)
                    }
                }}>
                    <li  class="three-banner-item1 " style={{backgroundImage: `url(${bgImage1})`}}>
                        <div>
                            <img class="icon-image" src={require('./images/icon1.png')} alt="" />
                                <h3>合规需求</h3>
                                <p>智慧城市场景详细说明智慧城市场景详细说明，智慧城市场景详细说明智慧城市场景详细说明。</p>
                        </div>
                    </li>
                    <li class="three-banner-item2" style={{backgroundImage: `url(${bgImage2})`}}>
                        <div>
                            <img class="icon-image" src={require('./images/icon2.png')} alt="" />
                                <h3>智慧城市</h3>
                                <p>智慧城市场景详细说明智慧城市场景详细说明，智慧城市场景详细说明智慧城市场景详细说明。</p>
                        </div>
                    </li>
                    <li class="three-banner-item3" style={{backgroundImage: `url(${bgImage3})`}}>
                        <div>
                            <img class="icon-image" src={require('./images/icon3.png')} alt="" />
                                <h3>内部威胁</h3>
                                <p>智慧城市场景详细说明智慧城市场景详细说明，智慧城市场景详细说明智慧城市场景详细说明。</p>
                        </div>
                    </li>
                    <li class="three-banner-item4" style={{backgroundImage: `url(${bgImage4})`}}>
                        <div>
                            <img class="icon-image" src={require('./images/icon4.png')} alt="" />
                                <h3>安全审计</h3>
                                <p>智慧城市场景详细说明智慧城市场景详细说明，智慧城市场景详细说明智慧城市场景详细说明。</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default HomeBanner3
