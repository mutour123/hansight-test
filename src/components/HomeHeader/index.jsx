import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'
import bgBanner from './images/bg-banner.png'


class HomeHeader extends React.Component {
    constructor(props, context){
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    }
    render(){
        return (
            <div className="head-banner" style={{backgroundImage: `url(${bgBanner})`}}>
                <header>
                    <img className="logo" src={require('./images/logo.png')} alt="logo" />
                    <ul>
                        <li>产品</li>
                        <li>方案</li>
                        <li>Blog</li>
                        <li>招贤纳士</li>
                    </ul>
                    <span className="request-a-demo-btn">演示请求</span>
                </header>
                <div className="head-banner-text">
                    <h1>让信息安全更&nbsp;AI</h1>
                    <p>智能分析<span className="henxian" >——</span>让安全可见、可知、可控</p>
                    <span className="know-more">了解更多</span>
                </div>
            </div>
        )
    }
}
export default HomeHeader
