const baseUrl = 'https://backend.lovenotecookies.com';

export const LoginUserAPI = async body => {
  console.log('userData :', body);
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Cookie',
    'lovenote-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1pd2lhV0YwSWpveE5qZ3dORE0yTnpJMExDSmxlSEFpT2pFMk9EQTFNak14TWpSOS5nTkZMelZYS3VsVU1zaUpFb1E5S2c3b1NNc1JIUXV2dFBSU0NORjlHalc4In0=; lovenote-session.sig=eRae4Z4FD-Yn-Kjul5_lTZ4rzLA',
  );

  try {
    const response = await fetch(
      'https://backend.lovenotecookies.com/api/auth/signin',
      {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: 'follow',
      },
    );
    let data = await response.json();

    if (response.status === 200) {
      return {status: true, data: data};
    } else {
      return {status: false, data: null, error: JSON.stringify(data)};
    }
  } catch (e) {
    console.log('Error', e.message);
    return {status: false, data: [], error: JSON.stringify(e.message)};
  }
};
export const SignupUserAPI = async body => {
  console.log('userData :', body);
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Cookie',
    'lovenote-session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1pd2lhV0YwSWpveE5qZ3dORE0yTnpJMExDSmxlSEFpT2pFMk9EQTFNak14TWpSOS5nTkZMelZYS3VsVU1zaUpFb1E5S2c3b1NNc1JIUXV2dFBSU0NORjlHalc4In0=; lovenote-session.sig=eRae4Z4FD-Yn-Kjul5_lTZ4rzLA',
  );

  try {
    const response = await fetch(
      'https://backend.lovenotecookies.com/api/auth/signup',
      {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: 'follow',
      },
    );
    let data = await response.json();

    if (response.status === 200) {
      return {status: true, data: data};
    } else {
      return {status: false, data: null, error: JSON.stringify(data)};
    }
  } catch (e) {
    console.log('Error', e.message);
    return {status: false, data: [], error: JSON.stringify(e.message)};
  }
};
