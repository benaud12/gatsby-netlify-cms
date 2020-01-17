import React from "react"
import PropTypes from "prop-types"

import {
  TvIcon,
  UtensilsIcon,
  SkiingIcon,
  ParkingIcon,
  ShoppingBasketIcon,
  WifiIcon,
} from "./Icons"

const Amenity = ({ title, icon, children }) => (
  <div className="amenity">
    {icon}
    <h3>{title}</h3>
    <p className="amenity__description">{children}</p>
  </div>
)

Amenity.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.any,
}

export const Amenities = () => (
  <div className="amenities">
    <Amenity title="Entertainment" icon={<TvIcon />}>
      Satellite TV, DVD and CD/radio players. Games and books.
    </Amenity>
    <Amenity title="Kitchen" icon={<UtensilsIcon />}>
      A well equipped kitchen area plus a washing machine and drying/ironing facilities.
    </Amenity>
    <Amenity title="Free Parking" icon={<ParkingIcon />}>
      A dedicated secure parking space in front of Haus Karlwirt.
    </Amenity>
    <Amenity title="Free Wifi" icon={<WifiIcon />}>
      Excellent Wifi reception throughout the apartment.
    </Amenity>
    <Amenity title="Ski Room" icon={<SkiingIcon />}>
      Located behind Haus Karlwirt.
    </Amenity>
    <Amenity title="Shops" icon={<ShoppingBasketIcon />}>
      Supermarket, bakery, delicatessens, banks and a variety of retail outlets in Ramsau Ort (2km away).
    </Amenity>
  </div>
)
