import React from "react"
import PropTypes from "prop-types"

const Activity = ({ title, children }) => (
  <div className="activity">
    <h3>{title}</h3>
    <p className="activity__description">{children}</p>
  </div>
)

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export const Activities = () => (
  <div className="activities">
    <Activity title="Skiing" >
      Access to&nbsp;
      <a
        href="https://www.skiamade.com/en/winter"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Ski Amadé
      </a>&nbsp;
      ski region; 270 lifts and 760 km piste. Ski hire shop 5 minutes walk away.
    </Activity>
    <Activity title="Swimming" >
      Swimming pools in Ramsau Ort and Schladming (free with&nbsp;
      <a
        href="https://www.schladming-dachstein.at/en/summercard"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Summercard
      </a>
      ).
    </Activity>
    <Activity title="Mountaineering" >
      19 Klettersteig (Via Ferrata) including 3 for children.
    </Activity>
    <Activity title="Summer Walking and Hiking" >
      Trails for every age and ability on the Ramsau Plateau and the Schladminger Tauern.
    </Activity>
    <Activity title="Rittisberg and Ramsau Beach" >
      Free with&nbsp;
      <a
        href="https://www.schladming-dachstein.at/en/summercard"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Summercard
      </a>
      . Within 10 minute walk of apartment. Fun for all the family.
    </Activity>
    <Activity title="Additional Activities" >
      Tobogganing, cycling, horse riding, museums, paragliding and much more...
    </Activity>
  </div>
)
