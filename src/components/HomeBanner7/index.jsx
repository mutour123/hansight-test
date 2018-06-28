import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.styl'


class HomeBanner7 extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render(){
        return (
            <div class="seven-banner">
                <h2>体验更智能的安全</h2>
                <p>HanSight Enterprise —— 让安全可见、可知、可控</p>
                <span class="now-use-btn">立即试用</span>
            </div>
        )
    }
}
export default HomeBanner7
