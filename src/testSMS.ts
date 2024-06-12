import { SendAlertSMSIR } from "./smsir_mh_ts";


const api_key: string = '121212121211121';   ///Example API Key 
const to: string = '09100059323';  //Example Phone Number
const message: string = 'Hello,this test message!'; //Max 24 Character Length
const templateId: string = "750016";  //Example template ID 

SendAlertSMSIR(to, message, api_key, templateId);