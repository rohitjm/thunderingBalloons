import React from 'react';
import AddressListEntry from './AddressListEntry.js';
// const AddressList = ({addresses, setState, onRemove}) => (
//   <div>
//   {addresses.map((address) =>
//     <AddressListEntry address={address} key={address.id} onRemove = {onRemove.bind(this)}/>
//     )}
//   </div>
// );

const AddressList = ({addresses, setState, onRemove}) => {
  return (
    <div>
      {addresses.map((address) =>
        <AddressListEntry address={address} key={address.id} onRemove = {onRemove.bind(this)}/>
      )}
    </div>
  );
};

export default AddressList;
