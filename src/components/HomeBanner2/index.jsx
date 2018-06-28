import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'
import bgBanner from './images/中间.png'


class HomeBanner2 extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render(){
        return (
            <div class="second-banner" style={{backgroundImage: `url(${bgBanner})`}}>
                <div class="second-banner-left">
                    <h2>HanSight Enterprise</h2>
                    <div>
                        <p>瀚思科技产品线以大数据安全分析企业HanSight Enterprise为核心</p>
                        <p>支持异构数据、快速响应、安全态势感知 安全管理 威胁资产 降低MTTD MTTR......</p>

                    </div>
                    <span class="second-banner-btn">申请使用</span>
                </div>
            </div>
        )
    }
}
export default HomeBanner2
