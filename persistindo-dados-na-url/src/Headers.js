const Headers = ({ headers = [] }) => {
  const headerClick = (header) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sort', header);
    window.location.search = urlParams;
  };

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th onClick={() => headerClick(header)} key={header}>{header.toUpperCase()}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Headers;
