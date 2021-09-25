import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playerCount } from '../../Store/Action/Action'
import ApiCall from '../ApiCall/ApiCall'
import './Home.css'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }
    async componentDidMount() {
        let res = await ApiCall();
        this.setState({
            response: res
        })
    }

    Previous = () => {
        let tempCount = this.props.currentVal.currentPlayer;
        if (tempCount !== 0) {
            tempCount -= 1;
            this.props.playerCount(tempCount);
        }
    }
    Next = () => {
        let tempCount1 = this.props.currentVal.currentPlayer;
        if (tempCount1 < this.state.response.length - 1) {
            tempCount1 += 1;
            this.props.playerCount(tempCount1);
        }
    }

    render() {
        let currentPlayerCount = Number(this.props.currentVal.currentPlayer)
        if (this.state.response.length) {
            return (<>
                <div className='OuterDiv'>
                    <h1 className='headingColor'>Individual Player Details</h1>
                    <div className='Player-Section'>
                        <img className='imgDiv' src={this.state.response[currentPlayerCount].playerImage} alt={this.state.response[currentPlayerCount].playerName} />
                        <div className='detailsDiv'>
                            <p><span className='headingtext'>Name : </span>{this.state.response[currentPlayerCount].playerName}</p>
                            <p><span className='headingtext'>Description : </span>{this.state.response[currentPlayerCount].description}</p>
                            <p><span className='headingtext'>Price : </span>{this.state.response[currentPlayerCount].price}</p>
                        </div>
                    </div>
                </div>
                <div className='prv-nxtSec'>
                    <button className={currentPlayerCount !== 0 ? 'PrevNxtButton' : 'unClickPrevNxtButton'} onClick={this.Previous}>Previous</button>
                    <button className={currentPlayerCount < this.state.response.length -1 ? 'PrevNxtButton' : 'unClickPrevNxtButton'} onClick={this.Next}>Next</button>
                </div>
            </>)
        } else {
            return 'Loading';
        }
    }
}

const mapStateToProps = (state) => ({
    currentVal: state.reducer
})

const mapDispatchToProps = (dispatch) => ({
    playerCount: (payload) => dispatch(playerCount(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
