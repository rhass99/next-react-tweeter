import React, { Component } from 'react';
import Tweetlist from '../tweets/Tweetlist';
import CreateTweet from '../tweets/CreateTweet';
import Footer from '../common/footer';

const listDBTweets = () => (prevState, currentProps) => {
  return { ...prevState, tweets: currentProps.tweets}
}

const myTweets = [
  {
  username: "Rami",
  userHandle: "@rami",
  avatarURL: "",
  text: "Lorem, ",
  timeLapsed: 4,
 },
 {
  username: "Blend",
  userHandle: "@blend",
  avatarURL: "",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, ",
  timeLapsed: 4,
 }
]

class Loggedin extends Component {

  state = {
    tweets: [],
    creating: true,
    newTweetValue: '122'
  }

  handleAddTweet = (e) => {
    const handleState = listDBTweets()
    console.log(this.state.tweets)
    let newList = [{
      avatarURL: "",
      text: e.target.value,
      timeLapsed: 4,
      userHandle: "@blend",
      username: "Blend",
    }].concat(this.state.tweets)
    this.setState(handleState(this.state, {tweets: newList}))
  }

  handleListofTweets(newTweets) {
    const handleState = listDBTweets()
    this.setState(handleState(this.state, {tweets: newTweets}))
  }
  

  componentDidMount(){
    this.handleListofTweets(myTweets)
  }


  render() {
    return (
      <div>
          <Tweetlist 
            tweetList={this.state.tweets} 
            creating={this.state.creating}>
            <CreateTweet addTweet={this.handleAddTweet} />
          </Tweetlist>
          <Footer />
      </div>

    )
  }

}

export default Loggedin