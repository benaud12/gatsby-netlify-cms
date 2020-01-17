import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTv,
  faUtensils,
  faParking,
  faWifi,
  faSkiing,
  faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'

const Default = (props) => <FontAwesomeIcon size="3x" {...props} />

export const TvIcon = (props) => <Default icon={faTv} {...props} />

export const UtensilsIcon = (props) => <Default icon={faUtensils} {...props} />

export const ParkingIcon = (props) => <Default icon={faParking} {...props} />

export const WifiIcon = (props) => <Default icon={faWifi} {...props} />

export const SkiingIcon = (props) => <Default icon={faSkiing} {...props} />

export const ShoppingBasketIcon = (props) => <Default icon={faShoppingBasket} {...props} />
