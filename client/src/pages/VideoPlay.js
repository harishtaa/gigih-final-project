import NavigatinBar from './../components/NavigationBar';
import { Row, Col, Container} from 'react-bootstrap';
import VideoEmbed from '../components/VideoEmbed';
import React from 'react'
import CommentSection from '../components/CommentSection';


const VideoPlay = () => {

    return(
        <Container>
            <div>
                <NavigatinBar/>
            </div>
            <div>
                <Row>
                    <Col xs={3} style={{backgroundColor:'tomato'}}>

                    </Col>

                    <Col xs={6} style={{backgroundColor:'aqua'}}>
                        <VideoEmbed/>
                    </Col>

                    <Col xs={3} style={{backgroundColor:'tomato'}}>
                        <CommentSection/>
                    </Col>
                </Row>
            </div>
        
        </Container>
        
    )
}

export default VideoPlay