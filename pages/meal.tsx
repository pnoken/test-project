import React from 'react'
import Layout from '../components/Layout'

function meal() {
    return (
        <Layout title="Select A Meal (One Per Day)">
        <div className="container">
            <h1>Monday</h1>
            <div key={""} className="col-md-4 mb-5">
                  <div className="categorybtn mr-3 row justify-content-between">
                    <div>
                      <h6 className="categorylabel capitalize-text category-name">
                        {""}
                      </h6>
                    </div>
                    <div>
                      <span className="categoryicons">
                        <i
                        //   onClick={()=>findItem(category.key)}
                          className="fe fe-edit mr-1"
                        />
                        <i
                        //   onClick={() => trashItem(category.key)}
                          className="fe fe-trash-2"
                        />
                      </span>
                    </div>
                    
                  </div>
              </div>
            <h1>Tuesday</h1>
            <select>
                <option>Fufu</option>
            </select>
            <h1>Wednesday</h1>
            <select>
                <option>Fufu</option>
            </select>
            <h1>Thursday</h1>
            <select>
                <option>Fufu</option>
            </select>
            <h1>Friday</h1>
            <select>
                <option>Fufu</option>
            </select>
        </div>
        </Layout>
    )
}

export default meal
