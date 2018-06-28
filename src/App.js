import React, {Component} from 'react';
import HomeHeader from './components/HomeHeader'
import HomeBanner2 from './components/HomeBanner2'
import HomeBanner3 from './components/HomeBanner3'
import HomeBanner4 from "./components/HomeBanner4";
import HomeBanner5 from "./components/HomeBanner5";
import HomeBanner6 from "./components/HomeBanner6";
import HomeBanner7 from "./components/HomeBanner7";
import MFooter from "./components/MFooter";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*第一个banner*/}
                <HomeHeader/>
                {/*第二个banner */}
                <HomeBanner2/>
                {/*第三个banner*/}
                <HomeBanner3/>
                {/*第四个banner*/}
                <HomeBanner4/>
                {/*第五个banner*/}
                <HomeBanner5/>
                {/*第六个banner*/}
                <HomeBanner6/>
                {/*第七个banner*/}
                <HomeBanner7/>
                {/*footer*/}
                <MFooter/>
            </div>
        );
    }
}


export default App;
