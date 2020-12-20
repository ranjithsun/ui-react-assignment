function FetchAPI(url, body='', method='GET'){
    const arg = {method};
    if(method!=='GET'){
        arg.body = JSON.stringify(body);
        arg.headers = {'Content-Type': 'application/json'}
    }
    return fetch(url, arg)
    .then(res => res.json())
    .catch(console.log)
}

export default FetchAPI;