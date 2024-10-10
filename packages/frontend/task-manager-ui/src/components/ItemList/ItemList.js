import { useEffect } from 'react';
import { deleteItem } from '../../store/actions';
import { fetchItemList } from '../../services/services';

const ItemList = (props) => {
    const { items, dispatch, state } = props;
    const { content: { labels } } = state;

    useEffect(() => {
      fetchItemList(dispatch);
      //console.log('State in Item List ', state);
    }, [dispatch]);

    if (!items.length) {
      return '';
    }
    return (
        <>
        <p>{labels.itemList}:</p>
          <ul>
                {
                    items.map((item) => {
                        return (
                        <li key={item.id}>
                          <span>{item.name}</span>
                          <a onClick={(e) => {
                            e.preventDefault()
                            dispatch(deleteItem(item.id))
                          }} href="VOID();">Delete</a>
                        </li>);
                    })
                }
            </ul>
        </>
   );
};

export default ItemList;