import React, { Component } from 'react';
import Head from 'next/head'
import PageHeader from '../components/common/headers';
import Loggedin from '../components/finals/loggedin';
import LoggedOut from '../components/finals/loggedout';


const Meta = () => {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" 
      />
      </Head>
    </div>
  )
}

class Index extends Component {
  
  state = {
    loggedin: true
  }

  render() {
    return (
      <div>
      <Meta />
      <PageHeader loggedin={this.state.loggedin}/>
      {(this.state.loggedin ? <Loggedin /> : <LoggedOut />)}
      </div>
    )
  }
}

export default Index;