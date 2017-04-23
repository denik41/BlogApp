import React, { Component } from 'react';
import '../style/Composition.css';
import { Link } from 'react-router';

export default class Composition extends Component {

    render() {
        const fullFormat = this.props.fullFormat;
        const compositionObj = this.props.composition;

        return <div className="composition-page-container">
            <div className="composition-container-shadow composition-page-body">
                <div className="composition-header">
                    <div className="composition-author">
                        <span>Автор: </span>
                        <Link to="/users/1">{compositionObj.author}</Link>
                    </div>
                    <div>
                        <div className="composition-likes">
                            <span>Likes {compositionObj.likesNumber}</span>
                        </div>
                        <div className="composition-publish-date">
                            <span>Дата публікації: {compositionObj.createdDate}</span>
                        </div>
                    </div>
                </div>
                <div className="composition-title">
                    {fullFormat ? <span>{compositionObj.title}</span> :
                        <Link to={`/compositions/${compositionObj.id}`}>{compositionObj.title}</Link>}
                </div>
                <div className="composition-body">
                    {fullFormat ? compositionObj.content :
                        <div>{compositionObj.content.substr(0, 100)}...<Link className="composition-read-more"
                                                                             to={`/compositions/${compositionObj.id}`}>Читати далі</Link>
                        </div>}
                </div>
            </div>
        </div>
    }
}

Composition.defaultProps = {
    fullFormat: true,
    composition: {
        id: 82734234,
        author: 'user user',
        createdDate: '10/05/2016',
        likesNumber: 5,
        title: 'Slkjdfng skdjfgskj dnfgkl smdfgl ks;dmfg',
        content: `ksj fdngkffffffff ffffff ffffff ffffsdlfn gsfdngs ndfgsdgf sdfgksjfdn g gs
        ndfgsdgf sdfgksjfdn ksj fdngsffffffff ffffff ffffff ffffslfn gsfdngs ndfgsdgf sdfgksjfdn gsd
        ksj fdnkffffffff ffffff ffffff ffff slfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngsffffffff ffffff ffffff ffffsdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdnglkffffffff ffffff ffffff fff fsdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngkffffffff ffffff ffffff ffffdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngkffffffff ffffff ffffff ffffs dlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngkffffffff ffffff ffffff ffffsdlfn gsfdngs ndfgsdgf sdfgksjfdn g gs
        ndfgsdgf sdfgksjfdn ksj fdngsffffffff ffffff ffffff ffffslfn gsfdngs ndfgsdgf sdfgksjfdn gsd
        ksj fdnkffffffff ffffff ffffff ffff slfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngsffffffff ffffff ffffff ffffsdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdnglkffffffff ffffff ffffff fff fsdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngkffffffff ffffff ffffff ffffdlfn gsfdngs ndfgsdgf sdfgksjfdn gsld
        ksj fdngkffffffff ffffff ffffff ffffs dlfn gsfdngs ndfgsdgf sdfgksjfdn gsld`
    }
};
