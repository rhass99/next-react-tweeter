import { Button, Segment, Header, Image} from 'semantic-ui-react';
import Errors from './errors'

const PageHeaders = (props) => {
  const { loggedin, errors } = props
  return (
    <div>
      <Segment style={{backgroundColor: '#016936'}} clearing={true}>
        <Header as='h1' floated='left'>
        <Image 
          src={`/static/img/bird.png`}
          as='a'
          size='large'
          target='_blank'
          rounded
        ></Image> Tweeter
        </Header>
        {(loggedin ? <Button floated='right'>Compose</Button> : <Button floated='right'>Login/Register</Button>)}
      </Segment>
    <Errors errors={errors}/>
    </div>
  )
}


export default PageHeaders;