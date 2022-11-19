import React, { useEffect, useRef, useState } from 'react';

import maplibregl from 'maplibre-gl';
import LocationSvg from '../assets/svg/locationSvgComponent';
import CombinedShape from '../assets/img/CombinedShape.png'

interface Props {
    lati: number;
    long: number;
    name: string;
    address: string;
    number: string;
    email:string;
}

const MapComponent = ({lati, long, name, address, email, number}:Props) => {

    const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng] = useState(long);
  const [lat] = useState(lati);
  const [zoom] = useState(8);
  const [API_KEY] = useState('snTl1Nd5A0c2oldLzFUW');

  useEffect((): any => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/a30b1875-3913-4fae-a06e-d330bea049f5/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new maplibregl.Marker({color: '#D8D8D8', offset: [90, -120]})
  .setLngLat([long, lati])
  .addTo(map.current);

    Array.from(document.getElementsByClassName('maplibregl-control-container') as HTMLCollectionOf<HTMLElement>)[0].style.display='none';
    const container = Array.from(document.getElementsByClassName('maplibregl-canvas') as HTMLCollectionOf<HTMLElement>)[0];
    container.style.width='100%';
   container.style.height='100%';
    container.style.borderBottomLeftRadius='8px';
    container.style.borderBottomRightRadius='8px';
});

 
    return (
        <div className='w-96 h-96 cursor-grabbing md:w-56 md:h-56 2xl:w-96 2xl:h-96'>
            <div className='relative bg-blue-map-bg p-2 rounded-t-lg h-1/2 flex flex-col text-gray-50 justify-center text-start 2xl:p-12 2xl:text-2xl'>
                <img className='absolute left-0 max-h-full rounded-tl-lg' src={CombinedShape} alt="..." />
                <span className='z-10 font-semibold'>{name}</span>
                <span className=' z-10 flex items-center gap-1'><LocationSvg/> {address}</span>
                <span className='z-10'>{number}</span>
                <span className='z-10'>{email}</span>
            </div>
            <div className='h-1/2 overflow-hidden' ref={mapContainer}></div>
        </div>
    );
};

export default MapComponent;