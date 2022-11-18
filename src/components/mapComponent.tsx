import React, { useEffect, useRef, useState } from 'react';

import maplibregl from 'maplibre-gl';

interface Props {
    lati: number;
    long: number;
}

const MapComponent = ({lati, long}:Props) => {

    const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng] = useState(long);
  const [lat] = useState(lati);
  const [zoom] = useState(10);
  const [API_KEY] = useState('snTl1Nd5A0c2oldLzFUW');

  useEffect((): any => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/a30b1875-3913-4fae-a06e-d330bea049f5/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    Array.from(document.getElementsByClassName('maplibregl-control-container') as HTMLCollectionOf<HTMLElement>)[0].style.display='none';
    const container = Array.from(document.getElementsByClassName('maplibregl-canvas') as HTMLCollectionOf<HTMLElement>)[0];
    container.style.width='100%';
    container.style.height='100%';
    container.style.borderBottomLeftRadius='8px';
    container.style.borderBottomRightRadius='8px';
});

 
    return (
        <div className='w-96 h-96'>
            <div className='bg-slate-900 rounded-t-lg h-1/2'></div>
            <div className='h-1/2' ref={mapContainer}></div>
        </div>
    );
};

export default MapComponent;