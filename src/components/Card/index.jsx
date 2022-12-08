import moment from 'moment/moment'
import React from 'react'
import { Card, Header, List } from 'semantic-ui-react'


const CardDescription =({details})=> {
    console.log("details", details)
    return (
        <div>
            <List>
                
            {details.map((item, index)=> {
                return (
                    <>
                        <List.Item key={index}>
                            Last Updated <strong>{moment(item.lastUpdated).format('LLLL')}</strong>
                        </List.Item>
                        <List.Item key={index}>
                            Parameter: <strong>{item.parameter}</strong>
                        </List.Item>
                        <List.Item key={index}>
                            Unit: <strong>{item.unit}</strong>
                        </List.Item>
                    </>
                )
            })}
            </List>
        </div>
    )
}

function CardIndex({data}) {
    return (
        <div>
            <List>
                {data?.map((item, index)=> {
                    return(
                        <Card key={index} style={{ width: '100%' }}>
                        <Card.Content>
                            <Card.Header>
                                <Header size='medium'>{item.city}, {item.country}</Header>
                            </Card.Header>
                            <CardDescription details={item.measurements}  />
                        </Card.Content>
                    </Card>
                    )
                })}
            </List>
        </div>
    )
}

export default CardIndex