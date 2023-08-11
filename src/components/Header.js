import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardFormat from './CardFormat';

const Header = () => {
    return (
        <Tabs
            defaultActiveKey="All News"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="All News" title="All News">
                <CardFormat url='https://inshorts.me/news/all?offset=0&limit=21' />
            </Tab>
            <Tab eventKey="profile" title="Top News">
                <CardFormat url='https://inshorts.me/news/top?offset=0&limit=21' />
            </Tab>
            <Tab eventKey="longer-tab" title="Trending News">
               <CardFormat url='https://inshorts.me/news/trending?offset=0&limit=21' />
            </Tab>
            <Tab eventKey="Science News" title="Science News">
               <CardFormat url='https://inshorts.me/news/topics/science' />
            </Tab>
            <Tab eventKey="Entertainment News" title="Entertainment News">
               <CardFormat url='https://inshorts.me/news/topics/entertainment' />
            </Tab>
            <Tab eventKey="Sports News" title="Sport News">
               <CardFormat url='https://inshorts.me/news/topics/sports' />
            </Tab>
        </Tabs>
    )
}

export default Header
