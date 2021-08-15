import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CardContainer from '../../../components/containers/CardContainer'

function MapComponent({ position, zoom }) {
  position = [51.505, -0.09]
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
