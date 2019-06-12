import { Sticky, Segment, Header, Image} from 'semantic-ui-react';
import Errors from './Errors';
import { HeaderButton } from '../styledComponents/components'


const PageHeaders = (props) => {
  const { loggedin, errors } = props
  return (
    <div>
      <Sticky>
      <Segment style={{backgroundColor: '#49C39E'}} clearing={true}>
        <Header as='h1' floated='left'>
        <Image 
          src={`/static/img/bird.png`}
          as='a'
          size='large'
          target='_blank'
          rounded
        ></Image> Tweeter
        </Header>
        {(loggedin ? <HeaderButton floated='right'>Compose</HeaderButton> : <HeaderButton floated='right'>Login/Register</HeaderButton>)}
      </Segment>
    <Errors errors={errors}/>
    </Sticky>
    </div>
  )
}


export default PageHeaders;