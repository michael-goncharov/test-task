import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import axios from 'axios';

import Table from "./Table";
import StatsBar from "./StatsBar";
import MyModal from "./MyModal";

export default class App extends React.Component{
    state = {
        posts: [],
        showLogin: false
    }

    toggleModal = () => this.setState({
        showLogin: !this.state.showLogin
    })

    getCommentsNumber = () => this.state.posts.reduce((acc, post)=>post.comments.length+acc ,0)


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const postsAll= res.data;
                postsAll.map(post => {
                    post.comments = []
                })
                  const posts = postsAll.slice(0, 5)
                console.log(posts);
                this.setState({ posts });
            })
    }

  render() {
    return (
        <div className="container">
            <button
                className="btn btn-primary"
                onClick={
                    this.toggleModal
                }
            >Login
            </button>
            <MyModal
                toggle = {this.toggleModal}
                showModal={this.state.showLogin}
            />
          <h1> Articles </h1>
          <Table posts={this.state.posts}/>
          <div className="card-group">
          <StatsBar name={'articles'} number={this.state.posts.length}/>
          <StatsBar name={'comments'} number={this.getCommentsNumber()}/>
          </div>
        </div>
    );
  }


}


