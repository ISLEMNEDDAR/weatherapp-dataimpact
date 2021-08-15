import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CardContainer from '../../../components/containers/CardContainer'

function MapComponent() {
  return (
    <div className="flex hall wall padh10">
      <CardContainer>
        <Map center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </CardContainer>
    </div>
  )
}

export default MapComponent
