import { deleteItem } from '../../store/actions';

const ItemList = (props) => {
    const { items, dispatch, state } = props;
    const { content: { labels } } = state;
    return (
        <>
        <p>{labels.itemList}:</p>
          {
            <ul>
                {
                    items.map((item) => {
                        return (
                        <li key={item.id}>
                          <span>{item.name}</span>
                          <a onClick={(e) => {
                            e.preventDefault()
                            dispatch(deleteItem(item.id))
                          }} href="javascript:void(0);">Delete</a>
                        </li>);
                    })
                }
            </ul>
          }
        </>
   );
};

export default ItemList;