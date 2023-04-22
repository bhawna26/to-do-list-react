import React from "react";

const ListItem=(props)=>{
  const deleteListItem =()=>{
    const id=props.uniqueId;
    props.deleteItem(id);
    };
  return(
    <React.Fragment>
      <div onClick={deleteListItem}><li>{props.value}</li>
      </div>
    </React.Fragment>

  )
}
export default ListItem;