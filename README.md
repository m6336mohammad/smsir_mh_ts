# smsir_mh_ts

This package is for using SMS service from sms.ir should get API and templetId from sms.ir ,tyesScript

## Test Resalt

```bash
npm test

 PASS  src/SendAlertSMSIR.test.ts
  SendAlertSMSIR
    √ should send SMS successfully (10 ms)
    √ should handle error response (92 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.634 s, estimated 3 s
Ran all test suites.

```

## Author

Mohammad Hadi  
Email: mmm.6336@gmail.com

Donate address : `TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG` //USDT TRC20

## Installation

To install the package, run:

```bash

#npm
npm install axios
npm install smsir_mh_ts
```

```bash
#yarn
yarn add axios
yarn add smsir_mh_ts
```

# Example use:

```bash
import { SendAlertSMSIR } from "./smsir_mh_ts";


const api_key: string = '121212121211121';   ///Example API Key
const to: string = '09100059323';  //Example Phone Number
const message: string = 'Hello,this test message!'; //Max 24 Character Length
const templateId: string = "750016";  //Example template ID

SendAlertSMSIR(to, message, api_key, templateId);
```
