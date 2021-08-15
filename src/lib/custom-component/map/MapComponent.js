import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CardContainer from '../../../components/containers/CardContainer'
import Selectors from '../../redux/selectors'

function MapComponent({ zoom }) {
  const [position, setPosition] = useState({
    lat: null,
    lon: null,
  })
  const { coordinateSelector } = Selectors()

  useEffect(() => {
    setPosition({
      lat: coordinateSelector.lat,
      lon: coordinateSelector.lon,
    })
  }, [coordinateSelector.lon, coordinateSelector.lat])

  return (
    <div className="flex hall wall padh10 marv15">
      <CardContainer>
        <div className="flex aic jcc wall hall padh10 padv10 minh350">
          <Map center={position} zoom={zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>
      </CardContainer>
    </div>
  )
}

export default MapComponent
