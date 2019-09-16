import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';
import Legend from './Legend';
import { LayerTreeItemTypes } from '../data/layerTreeItemTypes';

const Layer = ({ 
    Id,
    children,
    expanded,
    layerKey,
    layerOrder,
    selected,
    title,
    type
 }) => {
    const childNodes = children && children.length 
        ? children.map((child) => {
            const { key, ...childProps } = child;
            return child.type === LayerTreeItemTypes.legend 
                ? (<Legend {...childProps} legendKey={key} />) 
                : (<Layer {...childProps} layerKey={key} />)
        }) 
        : [];
    return (
        <List.Accordion
          title={title}
          key={layerKey}
          left={() => <Checkbox />}
        >
          {childNodes}
        </List.Accordion>
    )
}

export default Layer;