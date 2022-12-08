// import moment from 'moment/moment'
import React from 'react'
import { Header, List } from 'semantic-ui-react'

// not using according to the open weather api
// const CardDescription =({details})=> {
//     console.log("details", details)
//     return (
//         <div>
//             <List>
                
//             {details.map((item, index)=> {
//                 return (
//                     <>
//                         <List.Item key={index}>
//                             Last Updated <strong>{moment(item.lastUpdated).format('LLLL')}</strong>
//                         </List.Item>
//                         <List.Item key={index}>
//                             Parameter: <strong>{item.parameter}</strong>
//                         </List.Item>
//                         <List.Item key={index}>
//                             Unit: <strong>{item.unit}</strong>
//                         </List.Item>
//                     </>
//                 )
//             })}
//             </List>
//         </div>
//     )
// }

function CardIndex({data}) {
    return (
        <div>
            <List>
                <Header size='medium'>{data?.sys?.country}</Header>
                <List.Item>
                    Temperature <strong>{data?.main?.temp}</strong>
                </List.Item>
                <List.Item>
                    Max Temperature <strong>{data?.main.temp_max}</strong>
                </List.Item>
                <List.Item>
                    min Temperature <strong>{data?.main.temp_min}</strong>
                </List.Item>
                <List.Item>
                    Humanity <strong>{data?.main.humidity}</strong>
                </List.Item>
                <List.Item>
                    Pressure <strong>{data?.main.pressure}</strong>
                </List.Item>
                <Header size='medium'>Weather</Header>

                {data?.weather.map((item, index)=> {
                    return (
                        <>
                            <List.Item>
                                Description <strong>{item.description}</strong>
                            </List.Item>
                            <List.Item>
                                Main <strong>{item.main}</strong>
                            </List.Item>
                        </>
                    )
                })}
            </List>
        </div>
    )
}

export default CardIndex