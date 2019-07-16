import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default class Table extends React.Component {

    render () {
    return(
        <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
                <th className="w-25" scope="col">Article title</th>
                <th className="w-50" scope="col">Content</th>
                <th className="w-auto" scope="col">Comments</th>
                <th className="w-auto" scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.props.posts.map(post =>
                <tr key={post.id}>
                    <th scope="row">{post.title}</th>
                    <td>{post.body}</td>
                    <td>{post.comments.length}</td>
                    <td>
                        <h3>
                            <a href="#" ><FontAwesomeIcon icon={faComment} /></a>
                            <span>  </span>
                            <a href="#" ><FontAwesomeIcon icon={faTimesCircle} /></a>
                        </h3>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
    }
}

