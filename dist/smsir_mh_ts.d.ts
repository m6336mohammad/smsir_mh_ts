declare module 'smsir_mh_ts' {
    /**
     * Sends an alert SMS via the sms.ir service.
     * 
     * @param to - The recipient's phone number.
     * @param message - The message to send.
     * @param api_key - The API key for authentication.
     * @param templateId - The template ID for the SMS.
     */
    export function SendAlertSMSIR(to: string, message: string, api_key: string, templateId: string): void;
  }
  