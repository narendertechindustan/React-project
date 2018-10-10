import React, {Component} from 'react';
import { assetsPrefix } from '../constants'
import { Link } from 'react-router-dom';
import CategoriesProducts from '../components/App/CategoriesProducts';
import TabsSections from '../components/App//TabsSections';
import FeaturedProducts from '../components/App//FeaturedProducts';
import ThreeGrid from '../components/App//ThreeGrid';
import MainSlider from '../components/App//MainSlider';


export default class App extends Component {
        
    render () {
        return <div className="main">
                    <MainSlider />
                    <ThreeGrid /> 
                    <FeaturedProducts />
                    <TabsSections />
                    <CategoriesProducts />
                </div>
    }
}