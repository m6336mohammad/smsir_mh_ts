import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const SendAlertSMSIR = (to: string, message: string, api_key: string, templateId: string): void => {
  const data = JSON.stringify({
    "mobile": to,
    "templateId": templateId,
    "parameters": [
      { name: 'CONTACTS', value: message }
    ],
  });

  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://api.sms.ir/v1/send/verify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
      'X-API-KEY': api_key
    },
    data: data
  };

  axios(config)
    .then((response: AxiosResponse) => {
      console.info(JSON.stringify(response.data));
    })
    .catch((error: AxiosError) => {
      console.error(error);
    });
};
