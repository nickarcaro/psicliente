

function FetchingGraphData(data){
  const url = 'http://localhost:4000/hechoconsultantes';
  const params = {
    method: "GET"
  };

    return fetch(url, params)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);

        return result;
      })
      .catch((err) => {
        return err.message;
      });
  }

export default FetchingGraphData;
