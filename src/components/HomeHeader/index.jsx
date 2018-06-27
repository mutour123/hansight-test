import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class HomeHeader extends React.Component {
    constructor(props, context){
        super(props, context)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    }
    render(){
        return (
            <h1>header</h1>
        )
    }
}
export default HomeHeader
