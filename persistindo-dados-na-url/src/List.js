import Headers from './Headers';

const List = ({ headers = [], data = [] }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const sort = urlParams.get('sort');
  const dataSorted = data.sort((a, b) => {
    if (a[sort] < b[sort]) {
      return -1;
    }
    if (a[sort] > b[sort]) {
      return 1;
    }
    return 0;
  });

  return (
    <table>
      {<Headers headers={headers} />}
      <tbody>
        {dataSorted.map((item) => (
          <tr key={item.id}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
