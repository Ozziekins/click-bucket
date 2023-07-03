import React from "react";
import './Game.css'
import '../bucket/Bucket.js'
import Bucket from "../bucket/Bucket";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.state = {
            buckets: [
                {id: 0, totalCapacity:250, increment:25 },
                {id: 1, totalCapacity:100, increment:10 },
                {id: 2, totalCapacity:300, increment:10 },
            ],
        };
    }

    deleteBucket(id) {
        // this.state.buckets.splice(id, 1);
        // this.setState({ });
        this.setState(prevState => ({
            buckets: prevState.buckets.filter((el, indx) => indx !== id )
        }));
    }

    render() {
        let renderBuckets = []
        this.state.buckets.forEach( (bucket, index) => {
            renderBuckets.push(<Bucket id={index} key={bucket.id.toString()} totalCapacity={bucket.totalCapacity} increment={bucket.increment} delete={this.deleteBucket} />)
            }
        )

    return (
            <div className="container">
                {renderBuckets}
            </div>
        )
    }

}

export default Game;
