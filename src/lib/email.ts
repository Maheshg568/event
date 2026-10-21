export interface OrderEmailPayload {
  referenceId: string;
  fullName: string;
  phone: string;
  email?: string;
  occasionType: string;
  preferredDate: string;
  eventLocation?: string;
  estimatedBudget?: string;
  guestCount?: number;
  space?: string;
  setup?: string;
  message?: string;
}

/**
 * Dispatches an immediate email notification to mahotsavagrandeur@gmail.com
 * when a celebration enquiry is submitted.
 */
export async function sendOrderEmailNotification(order: OrderEmailPayload): Promise<boolean> {
  try {
    const payload = {
      _subject: `👑 New Celebration Enquiry [${order.referenceId}] - ${order.fullName}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: order.email || 'mahotsavagrandeur@gmail.com',
      'Dossier Reference ID': order.referenceId,
      'Customer Full Name': order.fullName,
      'Telephone / Contact': order.phone,
      'Customer Email': order.email || 'Not provided (Optional)',
      'Type of Event': order.occasionType,
      'Event Date': order.preferredDate,
      'Event Location': order.eventLocation || 'Hubballi–Dharwad',
      'Estimated Budget': order.estimatedBudget || 'Not specified',
      'Estimated Guests': order.guestCount ? order.guestCount.toString() : 'Optional / TBD',
      'Additional Requirements': order.message || 'No custom directives provided.',
      'Submitted At (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    const response = await fetch('https://formsubmit.co/ajax/8731649c3e2e6a2d76514110d37fd0e6', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('Email dispatch notification response:', data);
    return data.success === 'true' || data.success === true;
  } catch (error) {
    console.warn('Email dispatch warning (order is safely saved in Supabase):', error);
    return false;
  }
}
