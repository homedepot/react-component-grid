import React from 'react';
import _ from 'lodash';

const SourceListComponent = (sources) => {
    const sourceListItems = _.map(sources, (source, i) => (<li key={i}>{source.name}</li>));
    return (
      <ul className="plp-source-list">
        {sourceListItems}
      </ul>
    );
};

SourceListComponent.propTypes = {
};

export default SourceListComponent;
