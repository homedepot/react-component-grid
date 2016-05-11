import React, { PropTypes } from 'react';
import _ from 'lodash';

const SourceListComponent = sources => {
    const sourceListItems = _.map(sources, source =>
        (<li>{source.name}</li>)
    );
    return (
      <ul className="plp-source-list">
        {sourceListItems}
      </ul>
    );
};

SourceListComponent.propTypes = {
    sources: PropTypes.func.isRequired
};

export default SourceListComponent;
