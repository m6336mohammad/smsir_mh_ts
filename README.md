# smsir_mh_ts
This package is for using SMS service from sms.ir should get API and templetId from sms.ir ,tyesScript

## Author

Mohammad Hadi  
Email: mmm.6336@gmail.com

Donate address : TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG  //USDT TRC20

## Installation

To install the package, run:
```bash

#npm
npm install axios
npm install smsir_mh_ts


#yarn
yarn add axios
yarn add smsir_mh_ts


# Example use:

import { SendAlertSMSIR } from "./smsir_mh_ts";


const api_key: string = '121212121211121';   ///Example API Key 
const to: string = '09100059323';  //Example Phone Number
const message: string = 'Hello,this test message!'; //Max 24 Character Length
const templateId: string = "750016";  //Example template ID 

SendAlertSMSIR(to, message, api_key, templateId);