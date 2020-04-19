const adminRequests = (url, method = "GET", data = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "jwt token goes here"
      });

      const config = {
        headers,
        method,
        mode: "cors"
      };

      if (method !== "GET") {
        config.body = JSON.stringify(data);
      }

      const response = await fetch(url, config);
      const responseData = await response.json();
      resolve(responseData);
    } catch (e) {
      reject(e);
    }
  });
};

export default adminRequests;
