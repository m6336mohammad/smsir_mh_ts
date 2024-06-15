import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SendAlertSMSIR } from './smsir_mh_ts';

// Create a mock instance of axios
const mock = new MockAdapter(axios);

describe('SendAlertSMSIR', () => {
  const to = '1234567890';
  const message = 'Test Message';
  const api_key = 'test_api_key';
  const templateId = 'test_template_id';

  beforeEach(() => {
    // Reset mock adapter between tests
    mock.reset();
  });

  test('should send SMS successfully', async () => {
    // Mock successful response
    mock.onPost('https://api.sms.ir/v1/send/verify').reply(200, { success: true });

    // Spy on console.info
    const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});

    SendAlertSMSIR(to, message, api_key, templateId);

    // Wait for axios request to be processed
    await new Promise(process.nextTick);

    expect(consoleInfoSpy).toHaveBeenCalledWith(JSON.stringify({ success: true }));

    // Restore console.info
    consoleInfoSpy.mockRestore();
  });

  test('should handle error response', async () => {
    // Mock error response
    mock.onPost('https://api.sms.ir/v1/send/verify').reply(500, { error: 'Internal Server Error' });

    // Spy on console.error
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    SendAlertSMSIR(to, message, api_key, templateId);

    // Wait for axios request to be processed
    await new Promise(process.nextTick);

    expect(consoleErrorSpy).toHaveBeenCalled();

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });
});
