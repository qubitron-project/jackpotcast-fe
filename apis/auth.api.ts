// Signup/Create User
export const signupRequest = async ({
  name,
  email,
  password,
  image,
}: {
  name: string;
  email: string;
  password: string;
  image: number;
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_ROUTE}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        image: image,
      }),
    });

    const user = await res.json();

    if (res.ok && user) {
      return user;
    } else if (user.error) {
      throw new Error(user.error);
    } else {
      throw new Error('Signup failed.');
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

type UpdateProfileArgs = {
  token: string;
  name: string;
  email: string;
  image: number;
};

// Update User profile
export const updateProfile = async ({
  token,
  name,
  email,
  image,
}: UpdateProfileArgs) => {
  try {
    const profileRes = await fetch(
      `${process.env.NEXT_PUBLIC_BE_ROUTE}/auth/profile`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          image,
        }),
      }
    );

    const profileData = await profileRes.json();

    if (profileData.hasOwnProperty('error')) throw new Error(profileData.error);

    if (profileData.hasOwnProperty('success'))
      throw new Error('Api call failed, check console.');

    return profileData;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
