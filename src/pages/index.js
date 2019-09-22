import React, { useState } from "react"

import Layout from "../components/Layout"

export default () => {
  const [isIntroExpanded, setIsIntroExpanded] = useState(false)

  const toggleIntroExpanded = () => setIsIntroExpanded(!isIntroExpanded)

  return (
    <Layout>
      <div className="title-bg">
        <h1>Apartment Waltraud</h1>
      </div>
      <section className="intro">
        <p>
          Apartment Waltraud is a lovely ski/holiday apartment in the idyllic alpine
          village of Ramsau am Dachstein.<br />
          Enjoy the stunning location, close to the main ski lifts and at the junction
          of numerous wonderful footpaths.<br />
          An extensive, sunny balcony offers magnificent mountain views.<br />
          Accommodation for 2 - 4 people.<br />
          <span id="free-summercard">
            Free <a href="https://www.schladming-dachstein.at/en/summercard" rel="noopener noreferrer" target="_blank">Summercard</a>
          </span>
        </p>
        {isIntroExpanded ? (
          <>
            <p>
              Ramsau am Dachstein lies on a beautiful, peaceful plateau at 1200 meters
              in the Austrian Alps. It is described as 'Die Quelle Deine Kraft'
              (the source of your strength) and 'Walking on Sunshine' which reflect
              the proven health benefits and its reputation for glorious sunshine.<br />
              A 'snow:sure' resort, Ramsau is renowned for its cross-country skiing but
              is also very popular, especially with the Austrians, for downhill skiing.<br />
            </p>
            <p>
              In winter the free ski bus to the famous Schladming 'World Cup' ski area is
              only 100 meters away as is the local bus to Ramsau Ort, Ramsau Kulm, Schladming
              and the Dachstein Gletcherbahn (the Dachstein glacier offers year round skiing at 2,700 m).
              A single ski pass allows access to the wonderful Amade ski network comprising 860 km
              of fabulous slopes.
            </p>
            <p>
              The children's ski area , the ski school and Ramsau beach are only a few minutes walk
              away - the location is therefore ideal in both winter and summer and is perfect for families.
            </p>
            <p>
              In summer you can relax on the sunny balcony drinking in the peace and tranquility of the
              outstanding alpine scenery or explore the numerous wonderful footpaths, some level, some
              steep and enjoy breathtaking views, maybe stopping now and then at one of the many welcoming Alms.
            </p>
          </>
        ) : null}
        <button
          id="toggle-intro-button"
          onClick={toggleIntroExpanded}
          >
          {isIntroExpanded ? "Show less" : "Show more"}
        </button>
      </section>
    </Layout>
  )
}
