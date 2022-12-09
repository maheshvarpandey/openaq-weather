import styles from "./cardcomp.module.scss";
import { Header, List } from 'semantic-ui-react'

import React, { FC } from "react";
import { ResponseType } from "../../Types";

export interface IProps {
  content: ResponseType;
}
/**
 * CardComp
 */
const CardComp: FC<IProps> = ({ content }) => {
  return (
    <div className={styles.content}>
            <List>
                <Header size='medium'>{content?.sys?.country}</Header>
                <List.Item>
                    Temperature <strong>{content?.main?.temp}</strong>
                </List.Item>
                <List.Item>
                    Max Temperature <strong>{content?.main.temp_max}</strong>
                </List.Item>
                <List.Item>
                    min Temperature <strong>{content?.main.temp_min}</strong>
                </List.Item>
                <List.Item>
                    Humanity <strong>{content?.main.humidity}</strong>
                </List.Item>
                <List.Item>
                    Pressure <strong>{content?.main.pressure}</strong>
                </List.Item>
                <Header size='medium'>Weather</Header>

                {content?.weather.map((item, index)=> {
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
};

export default CardComp;
