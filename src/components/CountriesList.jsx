import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({country}) {

  return (
    <div>
        <div className="container">

            <div className="row">

                <div className="col-5" /*style="max-height: 90vh; overflow: scroll"*/>

                    <div className="list-group">
                    <Link className="list-group-item list-group-item-action"  to={`/country-details/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="countryimg"/>{country.name.common}</Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CountriesList