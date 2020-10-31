import React from 'react';
import PropTypes from 'prop-types'

import {FixedSizeList as List} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'


const VirtualList = (props) => {
    const { itemCount, itemSize, children } = props
    return(
        <AutoSizer>
            {({height, width}) => (
                <List
                className="List"
                height={height}
                width={width}
                itemCount={itemCount}
                itemSize={itemSize}
                >
                    {children}
                </List>
            )}
        </AutoSizer> 
    )
    
}

VirtualList.propTypes = {
    itemCount : PropTypes.number,
    itemSize: PropTypes.number
}

VirtualList.defaultProps = {
    itemCount : 100,
    itemSize: 35
}

export default VirtualList;