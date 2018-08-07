const fetch = (data, method, url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const obj = JSON.parse(xhr.responseText);
      if (obj.err) {
        cb(new TypeError(obj.err));
      } else {
        cb(null, JSON.parse(obj.result));
      }
    } else {
      cb(new TypeError(obj.err));
    }
  };
  xhr.open(method, url);
  xhr.send(data);
};
