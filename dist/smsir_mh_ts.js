"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAlertSMSIR = void 0;
const axios_1 = __importDefault(require("axios"));
const SendAlertSMSIR = (to, message, api_key, templateId) => {
    const data = JSON.stringify({
        "mobile": to,
        "templateId": templateId,
        "parameters": [
            { name: 'CONTACTS', value: message }
        ],
    });
    const config = {
        method: 'post',
        url: 'https://api.sms.ir/v1/send/verify',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
            'X-API-KEY': api_key
        },
        data: data
    };
    (0, axios_1.default)(config)
        .then((response) => {
        console.info(JSON.stringify(response.data));
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.SendAlertSMSIR = SendAlertSMSIR;
