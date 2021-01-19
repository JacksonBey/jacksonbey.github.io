import React, {Component} from 'react';
// import VidPlayer  from './VidPlayer'
import ReactPlayer from 'react-player'
// import 'semantic-ui-css/semantic.min.css'


export default class Project extends Component {


    render() {
        let {title, description, githubURL, hostedLink, videoSRC} = this.props.project
        return(
            <div className='projectCard'>
                <ReactPlayer url='https://www.youtube.com/watch?v=v4K8SMMEvRM' width='35vh' height='35vh' />
                <div className="projectText">
                <p>{title}</p>
                <p>vimeo:</p>
                </div>
            </div>
        )
    }
}

// this is the component for projects. It should have a prop of a project with a title
// description, video demo, hosted site link, and github repo link
// it uses the project prop to make a card with all the info
