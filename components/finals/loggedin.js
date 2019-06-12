import React, { Component } from 'react';
import Tweetlist from '../tweets/tweetlist';
import CreateTweet from '../tweets/createTweet';
import Footer from '../common/footer';

const listDBTweets = () => (prevState, currentProps) => {
  return { ...prevState, tweets: currentProps.tweets}
}
const newTeweetChange = () => (prevState, currentProps) => {
  return { ...prevState, newTweet: currentProps.newTweet}
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
    newTweet: ''
  }

  handleNewTweetChange = (e) => {
    const handleState = newTeweetChange()
    this.setState(handleState(this.state, { newTweet: e.target.value }))
    console.log(this.state)
  }

  handleAddTweet = () => {
    console.log(this.state.newTweet)
    const handleState = listDBTweets()
    let newList = [{
      avatarURL: "",
      text: this.state.newTweet,
      timeLapsed: '10 days',
      userHandle: "@blend",
      username: "Blend",
    }].concat(this.state.tweets)
    this.setState(handleState(this.state, {tweets: newList}))
    return newList
  }

  handleListofTweets = (newTweets) => {
    const handleState = listDBTweets()
    this.setState(handleState(this.state, {tweets: newTweets}))
  }

  componentDidMount(){
    this.handleListofTweets(myTweets)
  }

  componentShallUpdate() {
    this.addNewTweet()
  }


  render() {
    return (
      <div>
          <Tweetlist
            addTweet={this.handleAddTweet}
            handleNewTweetChange={this.handleNewTweetChange}
            newTweet={this.state.newTweet}
            tweetList={this.state.tweets} 
            creating={this.state.creating}>
            <CreateTweet />
          </Tweetlist>
          <Footer />
      </div>

    )
  }

}

export default Loggedin