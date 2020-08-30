// How to know which hospital is closest to each library
// Ref: https://docs.mapbox.com/help/tutorials/analysis-with-turf/

// data: hospitals in Lexington, KY. and libraries in Lexing ton, KY.

import React, { FC, useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import { mapboxglDatas, hospitals, libraries } from '../shared/constant';

interface PropTypes {}
const AnalyzeData: FC<PropTypes> = (props: PropTypes) => {
  const [map, setMap] = useState(null);

  const mapContainer = useRef(null);

  const [state, setState] = useState({
    lng: -84.5,
    lat: 38.05,
    zoom: 11,
  });

  useEffect(() => {
    mapboxgl.accessToken = mapboxglDatas.token;

    const initMap = ({ setMap, mapContainer }) => {
      const _map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [state.lng, state.lat],
        zoom: state.zoom,
      });

      const popup = new mapboxgl.Popup();

      _map.on('load', () => {
        setMap(_map);

        _map.addLayer({
          id: 'hospitals',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: hospitals,
          },
          layout: {
            'icon-image': 'hospital-15',
            'icon-allow-overlap': true,
          },
          paint: {},
        });

        _map.addLayer({
          id: 'libraries',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: libraries,
          },
          layout: {
            'icon-image': 'library-15',
          },
          paint: {},
        });

        _map.addSource('nearest-hospital', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        });

        _map.resize();
      });

      _map.on('mousemove', e => {
        const features = _map.queryRenderedFeatures(e.point, {
          layers: ['hospitals', 'libraries'],
        });
        if (!features.length) {
          popup.remove();
          return;
        }

        const feature = features[0];

        popup.setLngLat(feature.geometry.coordinates).setHTML(feature.properties.Name).addTo(_map);

        _map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      });

      _map.on('click', e => {
        const libraryFeatures = _map.queryRenderedFeatures(e.point, { layers: ['libraries'] });
        if (!libraryFeatures.length) {
          return;
        }

        const libraryFeature = libraryFeatures[0];

        const nearestHospital = turf.nearest(libraryFeature, hospitals);
        if (nearestHospital) {
          _map.getSource('nearest-hospital').setData({
            type: 'FeatureCollection',
            features: [nearestHospital],
          });

          if (_map.getLayer('nearest-hospital')) _map.removeLayer('nearest-hospital');
          _map.addLayer(
            {
              id: 'nearest-hospital',
              type: 'circle',
              source: 'nearest-hospital',
              paint: {
                'circle-radius': 12,
                'circle-color': '#486DE0',
              },
            },
            'hospitals'
          );
        }
      });
    };

    if (!map) initMap({ setMap, mapContainer });
  }, [map]);

  return (
    <Layout>
      <Head>
        <title>Analyze data with Turf.js and Mapbox GL JS</title>
      </Head>

      <div>
        <div
          ref={el => (mapContainer.current = el)}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            overflow: 'hidden',
          }}
        />
      </div>
    </Layout>
  );
};

export default AnalyzeData;
