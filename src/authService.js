const fakeLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous login request
      setTimeout(() => {
        if (username === 'foo' && password === 'bar') {
          resolve(true);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  };
  
  export { fakeLogin };
  