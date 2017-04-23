import React, { Component } from 'react';
import HeaderDescription from './HeaderDescription';
import Composition from './Composition';
import About from './About';
import '../style/Home.css';

export default class Home extends Component {
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
        const description = ['Реєструйся у системі ведення блогів',
            'Створюй свої блоги та розвивай свій контент',
            'Спілкуйся з іншими користувачами та здобувай підписників'];
        return <div>
            <HeaderDescription description={description}/>
            <span className="popular-compositions-title">Популярні твори</span>
            <div className="popular-compositions-container">
                <Composition fullFormat={false} composition={composition1} />
                <Composition fullFormat={false} composition={composition1} />
                <Composition fullFormat={false} composition={composition1} />
                <Composition fullFormat={false} composition={composition1} />
            </div>
        </div>
    }
}
