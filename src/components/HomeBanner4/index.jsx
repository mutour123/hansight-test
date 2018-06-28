import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'


class HomeBanner4 extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render(){
        return (
            <div class="four-banner">
                <h2>我们的客户</h2>
                <ul>
                    <li><img src={require("./image/1.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/2.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/3.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/4.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/5.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/6.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/7.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/8.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/9.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/10.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/11.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/12.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/13.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/14.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/15.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/16.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/17.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/18.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/19.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/20.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/21.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/22.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/23.png")} alt="商家图标" /></li>
                    <li><img src={require("./image/24.png")} alt="商家图标" /></li>
                </ul>
            </div>
        )
    }
}
export default HomeBanner4
