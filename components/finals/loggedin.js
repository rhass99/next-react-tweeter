import React, { Component } from 'react';
import Tweetlist from '../tweets/Tweetlist';
import CreateTweet from '../tweets/CreateTweet';
import Footer from '../common/footer';


class Loggedin extends Component {

  state = {
    tweets: [
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
    ],
     creating: true,
  }


  render() {
    return (

      <div>
          <Tweetlist 
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