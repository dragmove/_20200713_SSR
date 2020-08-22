import utilStyles from '../styles/utils.module.scss';
import siteStyles from '../styles/site.module.scss';

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import mapboxgl from 'mapbox-gl';
// import { getSortedPostsData } from '../lib/posts';

// TODO: make env to compile sass

/*
// TODO: https://nextjs.org/learn/basics/assets-metadata-css
static file, // x
<head> for each page, // x
make reusable component with css modules, // 
add global css in 'pages/_app.js'
tips for Next.js
*/

/*
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
*/

export default function Home() {
  const [map, setMap] = useState(null);

  const mapContainer = useRef(null);

  // https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/#set-the-apps-default-state
  const [state, setState] = useState({
    lng: 5,
    lat: 34,
    zoom: 2,
  });

  useEffect(() => {
    // mapboxgl env
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHJhZ21vdmUiLCJhIjoiY2tkc3hrOGw2MGppMzJxcXNweW82aHVkdSJ9.Jknx5RF4tQyeI5M1vwOZOg';

    const initMap = ({ setMap, mapContainer }) => {
      const _map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [state.lng, state.lat],
        zoom: state.zoom,
      });

      _map.on('load', () => {
        setMap(_map);
        _map.resize();
      });

      _map.on('move', () => {
        console.log('move');

        setState({
          lng: _map.getCenter().lng.toFixed(4),
          lat: _map.getCenter().lat.toFixed(4),
          zoom: _map.getZoom().toFixed(2),
        });
      });
    };

    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <div>
          <div className={`${siteStyles.sidebarStyle}`}>
            Longitude: {state.lng} | Latitud: {state.lat} | Zoom: {state.zoom}
          </div>
        </div>
        <div ref={el => (mapContainer.current = el)} className={`${siteStyles.mapContainer}`} />
      </div>
    </Layout>
  );
}

/*
// TODO: https://nextjs.org/learn/basics/dynamic-routes
How to statically generate pages with dynamic routes using getStaticPaths.
How to write getStaticProps to fetch the data for each blog post.
How to render markdown using remark.
How to pretty-print date strings.
How to link to a page with dynamic routes.
Some useful information on dynamic routes.
*/
