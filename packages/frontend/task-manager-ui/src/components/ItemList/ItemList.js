import { useContext, useState, useEffect } from 'react';
import { deleteItem } from '../../store/actions';
//import { fetchItemList } from '../../services/services';
import useFetchApi from '../../hooks/FetchApi';
import { URL_FETCH_ITEMS } from '../../constants/AppConstants';
import Loader from '../Loader/Loader';
import { StoreContext } from '../../store/store';
import './itemList.scss';

const ItemList = (props) => {
    const { state, dispatch } = useContext(StoreContext);
    const { items = [] } = props;
    const { content: { labels } } = state;
    const { response, isLoading, error } = useFetchApi(URL_FETCH_ITEMS, {
      method: 'GET'
    });
    const [itemList, setItemList] = useState([]);
    //console.log('response data ', response.data);
    /*useEffect(() => {
      fetchItemList(dispatch);
      console.log('State in Item List ', state);
    }, [dispatch]);*/

    useEffect(() => {
      if (response && response.data) {
         setItemList([...response.data]);
      }
    }, [response]);

    const onSortByChange = (event) => {
      const sortBy = event.target.value;
      if (response && response.data) {
        response.data.sort((a, b) => {
          if (sortBy && a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
            return -1;
          }
          if (sortBy && a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
            return 1;
          }
          return 0;
        });
        setItemList([...response.data]);
      }
    };

    if (isLoading) {
      return <Loader />;
    }
    return (
        <>
        {items.length > 0 && <p>{labels.itemList}:</p>}
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
         { itemList.length > 0 && (
            <>
              <div className="sort-container" >
                <label htmlFor="sortBy">Sort by: </label>
                <select id="sortBy" onChange={onSortByChange}>
                  <option value="">--Select--</option>
                  <option value="title" >Title</option>
                  <option value="category" >Category</option>
                  <option value="description" >Description</option>
                </select>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {itemList.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.description}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </>
          )}
         {error && <p>Error in fetching data</p>}
        </>
   );
};

export default ItemList;