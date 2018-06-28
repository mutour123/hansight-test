import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'

class HomeBanner6 extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div class="six-banner">
                <h2>最新消息</h2>
                <ul>
                    <li>
                        <img src={require("./images/安全守门人-高总.png")} alt="高总"/>
                        <div>
                            <h3>第一财经周刊访谈瀚思科技CEO高瀚昭：安全守门人</h3>
                            <span>2017年10月10日</span>
                            <p>
                                作为国内第一家研发用户行为分析系统 (UBA) 的公司，瀚思科技主要针对内部威胁，通过对用户行为画像及对比异常行为来判断风险。
                            </p>
                            <div class="read-more-btn">阅读全文</div>
                        </div>

                    </li>
                    <li>
                        <img src={require("./images/HanSight500.png")} alt="HanSight500"/>
                        <div>
                            <h3>HanSight瀚思凭借大数据安全分析 跻身网络安全全球500强</h3>
                            <p>2017年3月2日</p>
                            <p>
                                北京时间2017年3月2日（美国当地时间3月1日）美国网络安全市场研究公司Cybersecurity Ventures发布了2017年第一季度网络安全……
                            </p>
                            <div class="read-more-btn">阅读全文</div>
                        </div>
                    </li>
                    <li>
                        <img src={require("./images/pos机.png")} alt="post机"/>
                        <div>
                            <h3>让金融反欺诈踏上正途，HanSight瀚思保驾护航黄金周</h3>
                            <p>2017年9月30日</p>
                            <p>
                                每逢节假日暴涨的不仅仅是旅游业，还有各种金融诈骗事件。尽管国家已经有法律法规对黑产进行相关处罚，然而快速收益和高回报也让越……
                            </p>
                            <div class="read-more-btn">阅读全文</div>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}

export default HomeBanner6
