import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetails({countries}) {

    const {countryId} = useParams()
    const [country] = countries.filter(el => el.alpha3Code === id)

  return (
    <div>

        <div className="container">

            <div className="row">

                <div className="col-7">
                    <h1>{country.nameofficial}</h1>
                    <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td /*style="width: 30%"*/>Capital</td>
                        <td>{countryId.capital}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            countryarea km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            <li><a href="/">borders</a></li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CountryDetails