import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'
import bgBanner from './images/小山丘.png'


class HomeBanner5 extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render(){
        return (
            <div class="five-banner" style={{backgroundImage: `url(${bgBanner}) , linear-gradient(#1C5BC3, #43B9EB )`}}>
                <div class="five-banner-text">
                    <h2>
                        使用HanSight Enterprise 短时间内
                        <br />
                            <span className="fontfamily">“</span>
                            从网银交易日志中发现多个高危个人银行账户
                            <span className="fontfamily">”</span>
                    </h2>
                    <p>瀚思大数据安全分析系统为我行提供了一种全新的业务安全解决方案， 在威胁发生的早期即能够提供及时且准确的预警，并能够刻画出受影响账户的具体行为等信息，
                        切实降低银行的业务风险。
                        <span class="someone">——某国银行信息安全负责人</span>
                    </p>

                    <span class="lean-more">了解更多</span>
                </div>
            </div>
        )
    }
}
export default HomeBanner5
