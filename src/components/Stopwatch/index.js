// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  onClickStartButton = () => {
    this.setTimer = setInterval(this.onIncrement, 1000)
  }

  onIncrement = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  clearTimer = () => {
    clearInterval(this.setTimer)
  }

  onClickStopButton = () => {
    this.clearTimer()
  }

  onClickResetButton = () => {
    this.clearTimer()
    this.setState({
      seconds: 0,
    })
  }

  render() {
    const {seconds} = this.state

    const totalTimeInSeconds = seconds
    const min = Math.floor(totalTimeInSeconds / 60)
    const sec = Math.floor(totalTimeInSeconds % 60)

    const timeInMinutes = min > 9 ? min : `0${min}`
    const timeInSeconds = sec > 9 ? sec : `0${sec}`

    return (
      <div className="bg">
        <h1 className="heading"> Stopwatch </h1>
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            height="15px"
            width="15px"
          />
          <span> Timer </span>
          <h1 className="time">
            {timeInMinutes}:{timeInSeconds}
          </h1>
          <div className="a">
            <button
              type="button"
              className="start"
              onClick={this.onClickStartButton}
            >
              Start
            </button>
            <button
              type="button"
              className="stop"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
