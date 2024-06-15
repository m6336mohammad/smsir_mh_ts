"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smsir_mh_ts_1 = require("./smsir_mh_ts");
const api_key = '121212121211121'; ///Example API Key 
const to = '09100059323'; //Example Phone Number
const message = 'Hello,this test message!'; //Max 24 Character Length
const templateId = "750016"; //Example template ID 
(0, smsir_mh_ts_1.SendAlertSMSIR)(to, message, api_key, templateId);
