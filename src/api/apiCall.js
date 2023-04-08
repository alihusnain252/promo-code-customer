import axios from 'axios';

const baseUrl = 'https://backend.buddysaver.net';

export const LoginPostRequest = async (data, url) => {
  console.log('signIn Data :', data);
  console.log('signIn URl :', url);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const res = await axios({
    method: 'post',
    url: url,
    baseURL: baseUrl,
    data: data,
    headers: headers,
  });
  return res;
};
export const PostRequest = async (data, url) => {
  console.log('signIn Data :', data);
  console.log('signIn URl :', url);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const res = await axios({
    method: 'post',
    url: url,
    baseURL: baseUrl,
    data: data,
    headers: headers,
  });
  return res;
};
export const RegisterRequest = async (data, url) => {
  console.log('signUInData :', data);
  console.log('signIn URl :', url);

  const res = await axios({
    method: 'post',
    url: url,
    baseURL: baseUrl,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return res;
};
export const UpdateRequest = async (token, data, url) => {
  console.log('signUInData :', data);
  console.log('signIn URl :', url);

  const AuthStr = 'Bearer '.concat(token);
  const res = await axios({
    method: 'post',
    url: url,
    baseURL: baseUrl,
    data: data,
    headers: {Authorization: AuthStr, 'Content-Type': 'multipart/form-data'},
  });
  return res;
};
export const GetRequest = async (token, url) => {
  try {
    const AuthStr = 'Bearer '.concat(token);
    const res = await axios({
      method: 'get',
      url: url,
      baseURL: baseUrl,
      headers: {Authorization: AuthStr},
    });

    if (res.status === 200) {
      return {status: true, data: res.data};
    } else {
      return {status: false, data: res.data};
    }
  } catch (error) {
    return {status: false, data: null};
  }
};
export const CreateAdRequest = async (token, data, url) => {
  console.log('signUInData :', data);
  console.log('token :', token);
  console.log('signIn URl :', url);
  const AuthStr = 'Bearer '.concat(token);

  const res = await axios({
    method: 'post',
    url: url,
    baseURL: baseUrl,
    data: data,
    headers: {Authorization: AuthStr, 'Content-Type': 'multipart/form-data'},
  });
  return res;
};
export const PostRequestWithToken = async (userToken, data, url) => {
  try {
    console.log('postData :', data);
    console.log('post URl :', url);
    const AuthStr = 'Bearer '.concat(userToken);
    // console.log(AuthStr);

    const res = await axios({
      method: 'post',
      url: url,
      baseURL: baseUrl,
      data: data,
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (res.status === 200) {
      return {status: true, data: res.data};
    } else {
      return {status: false, data: res.data};
    }
  } catch (error) {
    console.log("error :", JSON.stringify(error));
    return {status: false, data: null};
  }
};
export const updateImageRequest = async (userToken, data, url) => {
  try {
    console.log('postData :', data);
    console.log('post URl :', url);
    const AuthStr = 'Bearer '.concat(userToken);
    console.log(AuthStr);

    const res = await axios({
      method: 'post',
      url: url,
      baseURL: baseUrl,
      data: data,
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (error) {
    console.log('Post request Error :', error);
  }
};
