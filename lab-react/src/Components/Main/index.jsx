import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"
import "./styles.modules.css"


function Main() {
    return (
        <div className="main">
          <div id="card1">
            <img src={icon1} alt="icon1"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div id="card2">
            <img src={icon2} alt="icon2"/>
            <h3>Components</h3>
            <p>Build enclapsulated components that manage their state.</p>
          </div>
          <div id="card3">
            <img src={icon3} alt="icon3"/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div id="card4">
            <img src={icon4} alt="icon4"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
    )
}

export default Main