import React from 'react';

var AddressListEntry = ({address, onRemove}) => (

  <div>
    <div>{address} <a href data-id={address.id} onClick={onRemove.bind(this, address)}>remove</a> </div>
  </div>
);

export default AddressListEntry;
