import React from 'react';
import axios from 'axios';

import '../styles/application.scss';

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redditFeed: null
        };
    }

    /**
     * This method retrieves a reddit science data feed and sets the data into state as an array of:
     *
     * {
     *     url: "https:www.reddit.com/s/some-url",
     *     thumbnail: "https://b.thumbs.redditmedia.com/YHdl2LLiNLu_h2XgBsl2XtXcvj_YE1mJRnBlt7aizeo.jpg",
     *     title: "CDC study finds e-cigarettes responsible for dramatic increase in tobacco use among middle and high school students erasing the decline in teen tobacco product use from previous years."
     * }
     *
     */
    componentDidMount() {
        const component = this;
        axios.get('https://www.reddit.com/r/science.json').then(function(response) {
            const redditFeed = response.data.data.children.map(node => {
                const data = node.data;
                return {
                    url: `https://www.reddit.com${data.permalink}`,
                    thumbnail: data.thumbnail,
                    title: data.title,
                };
            });
            component.setState({redditFeed: redditFeed});
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const { redditFeed } = this.state;
        return (
            <section>
                <h4>Search</h4>
                <input type="text" name="search" id="search" />
                {redditFeed ? (
                    <ul>
                        {redditFeed.map(entry => (
                            <li key={entry.thumbnail}>
                                <a href={entry.url}>
                                    <strong>{entry.title}</strong>
                                    <img src={entry.thumbnail} alt={entry.title}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : ''}
            </section>
        );
    }
}

export default IndexPage;
