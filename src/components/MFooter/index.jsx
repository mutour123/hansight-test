import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'


class MFooter extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render(){
        return (
            <footer>
                <div>
                    <span>社交媒体 </span>
                    <ul>
                        <li> <img  src={require("./images/WeChat.png")} alt="微信图标" /></li>
                        <li><img src={require("./images/微博.png")} alt="微博图标" /></li>
                    </ul>
                </div>
                <div>
                    <span>公司信息 </span>
                    <ul>
                        <li>公司简介</li>
                        <li>创始团队</li>
                        <li>荣誉</li>
                        <li>投资方</li>
                        <li>联系我们</li>
                        <li>招贤纳士</li>
                        <li>新闻</li>
                    </ul>
                </div>
                <div>
                    <span>合作伙伴 </span>
                    <ul>
                        <li>公安三所</li>
                        <li>华为</li>
                        <li>亚信</li>
                        <li>百度安全</li>
                        <li>Cisco pxGrid</li>
                    </ul>
                </div>
                <p class="company-record">2017 © 北京瀚思安信科技有限公司. All rights reserverd. 京ICP备21110142227</p>
            </footer>
        )
    }
}
export default MFooter
