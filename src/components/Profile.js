import React, { Component } from 'react';
import '../style/Profile.css';

import Composition from './Composition';

export default class Profile extends Component {
    render() {
        const composition1 = {
            id: 2431234,
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
        };

        const user = this.props.user;

        return <div className="profile-container">
            <div className="profile-main-info-block">
                <div className="profile-photo-block">
                    <div><img src=""/></div>
                    <span className="profile-login">{user.login}</span>
                </div>
                <div className="profile-info-block">
                    <div className="profile-info-element">
                        <div className="profile-info-title">Прізвище Ім'я:</div>
                        <div className="profile-info-value">{user.surname} {user.name}</div>
                    </div>
                    <div className="profile-info-element">
                        <div className="profile-info-title">E-mail:</div>
                        <div className="profile-info-value">{user.email}</div>
                    </div>
                    {user.about ? <div className="profile-info-element">
                        <div className="profile-info-title">Про себе:</div>
                        <div className="profile-info-value">{user.about}</div>
                    </div> : ''}
                    {user.socialNetworksLinks ? <div className="profile-info-element">
                        <div className="profile-info-title">Посилання на соц мережі:</div>
                        <div className="profile-info-value">{user.socialNetworksLinks}</div>
                    </div> : ''}
                </div>
            </div>
            <div className="profile-compositions-block">
                <Composition fullFormat={false} composition={composition1} />
                <Composition fullFormat={false} composition={composition1} />
                <Composition fullFormat={false} composition={composition1} />
            </div>
        </div>
    }
}

Profile.defaultProps = {
    user: {
        login: 'user user',
        name: 'Yura',
        surname: 'Denik',
        email: 'denik@bla.bla',
        about: 're,kgbneksjgnesglnsl;dkgsgf',
        socialNetworksLinks: 'ofjsodfosdfsdf'
    }
};
