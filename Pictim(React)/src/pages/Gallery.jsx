import React from "react";
import '../index.scss';
import { useParams } from "react-router-dom";
import {collections} from '../data';
import { Photo } from "../components/Photo";


export const Gallery = () => {
    const {id} = useParams();
    return (
        
        <div className="content">
            <h1>{collections[id].name}</h1>
            <div className="list">
                {collections[id].photos.map((obj, index) => (
                    <Photo photo={obj} key={collections[index].id} />
                ))}
            </div>
        </div> 
        
    )
}