"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
const smsir_mh_ts_1 = require("./smsir_mh_ts");
// Create a mock instance of axios
const mock = new axios_mock_adapter_1.default(axios_1.default);
describe('SendAlertSMSIR', () => {
    const to = '1234567890';
    const message = 'Test Message';
    const api_key = 'test_api_key';
    const templateId = 'test_template_id';
    beforeEach(() => {
        // Reset mock adapter between tests
        mock.reset();
    });
    test('should send SMS successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock successful response
        mock.onPost('https://api.sms.ir/v1/send/verify').reply(200, { success: true });
        // Spy on console.info
        const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation(() => { });
        (0, smsir_mh_ts_1.SendAlertSMSIR)(to, message, api_key, templateId);
        // Wait for axios request to be processed
        yield new Promise(process.nextTick);
        expect(consoleInfoSpy).toHaveBeenCalledWith(JSON.stringify({ success: true }));
        // Restore console.info
        consoleInfoSpy.mockRestore();
    }));
    test('should handle error response', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock error response
        mock.onPost('https://api.sms.ir/v1/send/verify').reply(500, { error: 'Internal Server Error' });
        // Spy on console.error
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        (0, smsir_mh_ts_1.SendAlertSMSIR)(to, message, api_key, templateId);
        // Wait for axios request to be processed
        yield new Promise(process.nextTick);
        expect(consoleErrorSpy).toHaveBeenCalled();
        // Restore console.error
        consoleErrorSpy.mockRestore();
    }));
});
