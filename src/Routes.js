import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import { Button, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import styles from './styles.css';

export default class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Layout>
                        <Header className={styles.header}>
                            <Button><Link to="/">Home</Link></Button>
                            <Button><Link to="/contact">Contact</Link></Button>
                            <Button><Link to="/blog">Blog</Link></Button>
                        </Header>
                    </Layout>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route path="/blog" component={Blog}/>
                
                </div>
            </Router>
        )
    }
}