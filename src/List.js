import React from 'react'

const List = (props) => {
    const {data} = props

    return(
        <div>
            <table className = "table table-hover sticky">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Room-Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(ele=>{
                        return(
                            <tr key = {ele.id}>
                                <td>{ele.name}</td>
                                <td>{ele.country}</td>
                                <td>{ele.city}</td>
                                <td>{`$${ele.price}`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default List