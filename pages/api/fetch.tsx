// export const fetcher = async (url) => {
//   const res = await fetch(url);

//   // 상태코드가 2xx가 아니라면 parse와 throw를 계속 시도합니다.
//   if (!res.ok) {
//     const error = new Error('[FAIL] fetch data');
//     //error.info에는 오류 객체를 담습니다.
//     error.info = await res.json();
//     //error.status에는 상태코드를 담습니다.
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

interface EndpointOptions {
  data?: Record<string, unknown>;
}

export async function fetcher(
  endpoint: string,
  { method, data, ...customConfig }: EndpointOptions & RequestInit = {
    method: 'GET',
  }
) {
  const headers: RequestInit['headers'] = {};

  if (data) {
    headers['Content-Type'] = 'application/json';
  }

  const config: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    ...customConfig,
  };

  try {
    const response = await fetch(`${process.env.BASE_URL}/${endpoint}`, config);

    const data = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
