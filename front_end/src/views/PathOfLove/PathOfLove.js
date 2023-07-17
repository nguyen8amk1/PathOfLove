import React from 'react'
import './PathOfLove.scss'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '@fortawesome/fontawesome-free/css/all.min.css';



class PathOfLove extends React.Component {
    state = {
        containerStyle: {
            width: '100vw', 
            height: '100vh'
        },
        center: {
            lat: 10.870272297526915, 
            lng: 106.80301118040023
        }, 

        searchString: '',
        searchRecommendations: [
            // {
            //     name: 'thanh pho binh duong',
            //     address: 'kong chro, khung long bao chua,...'
            // },
            // {
            //     name: 'dat nuoc Gia Lai',
            //     address: 'thi xa An Khe, khung long bao dam,...'
            // },
        ]
    }

    typingSearch(searchString) {
        this.setState({
            searchString: searchString,
            // @StartTest: test recommendation
            searchRecommendations: searchString.length > 0 ? [
                {
                    name: 'thanh pho binh duong',
                    address: 'kong chro, khung long bao chua,...'
                },
                {
                    name: 'dat nuoc Gia Lai',
                    address: 'thi xa An Khe, khung long bao dam,...'
                },
            ]: []
            // @EndTest
        });
        // TODO: doing some searches and display them into with the search recommendation
    }

    render() {
        return(
            <>
            {/* <Map/>  */}
            <LoadScript googleMapsApiKey='AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8'>
                <GoogleMap 
                    mapContainerStyle={this.state.containerStyle}
                    center={this.state.center}
                    zoom={15}
                >
                <Marker position={this.state.center} />
                </GoogleMap>
            </LoadScript>

            {/* <>SearchBar</> */}
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" value={this.state.searchString} onChange={event => this.typingSearch(event.target.value)}/>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                {
                    this.state.searchRecommendations.length > 0 && 
                    <div className='searchRecommendations'>
                    {
                        this.state.searchRecommendations.map((item, index) => {
                            return (
                                <div className='searchItem'>
                                    <div>{item.name}</div>
                                </div>
                            );
                        })
                    }
                    </div>
                }
            </div>
            </>
        );
    }
}

export default PathOfLove;