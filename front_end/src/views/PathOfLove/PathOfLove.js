import React from 'react'
import './PathOfLove.scss'
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
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
        // Different zoom levels: 
            // 1: World
            // 5: Landmass/continent
            // 10: City
            // 15: Streets
            // 20: Buildings
        zoom: 15, 
        searchString: '',
        searchRecommendations: [
        ],
        markers: [
            {
                id: '345',
                name: 'thanh pho binh duong',
            },
            {
                id: '347',
                name: 'dat nuoc Gia Lai',
            },
        ],
        mapName: 'Test Map',
    }

    typingSearch(searchString) {
        // TODO: doing some searches and display them into with the search recommendation

        this.setState({
            searchString: searchString,
            // @StartTest: test recommendation
            searchRecommendations: searchString.length > 0 ? [
                {
                    id: '123',
                    name: 'thanh pho binh duong',
                    address: 'kong chro, khung long bao chua,...'
                },
                {
                    id: '124',
                    name: 'dat nuoc Gia Lai',
                    address: 'thi xa An Khe, khung long bao dam,...'
                },
                {
                    id: '125',
                    name: 'dat nuoc Gia Lai',
                    address: 'thi xa An Khe, khung long bao dam,...'
                },
                {
                    id: '126',
                    name: 'dat nuoc Gia Lai',
                    address: 'thi xa An Khe, khung long bao dam,...'
                },
                {
                    id: '127',
                    name: 'dat nuoc Gia Lai',
                    address: 'thi xa An Khe, khung long bao dam,...'
                },
            ]: []
            // @EndTest
        });
    }

    render() {
        return(
            <>
            {/* <Map/>  */}
            <LoadScript googleMapsApiKey='AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8'>
                <GoogleMap 
                    mapContainerStyle={this.state.containerStyle}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                <Marker position={this.state.center} />
                </GoogleMap>
            </LoadScript>

            {/* Map Properties */}
            <div className='mapProperties'>
                <div className='mapName'>
                    {this.state.mapName}
                </div>
                <div className='mapMarkersInfo'>
                    {
                        this.state.markers.map((item, index) => {
                            return (
                                <div key={item.id} className='mapMarker'>{item.name}</div>
                            );
                        })
                    }
                </div>
            </div>

            {/* <>SearchBar</> */}
            <div className="searchBarWrapper">
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
                                <div key={item.id} className='searchItem'>
                                    <div>{item.name} - {item.address}</div>
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