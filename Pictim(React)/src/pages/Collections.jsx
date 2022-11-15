import React from "react";
import {Collection} from '../components/Collection';
import '../index.scss';
import {collections} from '../data';


export const Collections = () => {
    return (
        <div className="content">
            <h1>{"Категории"}</h1>
            <div className="list">
                {collections.map((obj, index) => (
                <Collection name={obj.name} cover={obj.cover} id={collections[index].id} key={collections[index].id} /> ))}
            </div>
        </div> 
    )
}