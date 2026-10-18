import { createClient } from '@supabase/supabase-js';

const rawUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://iynfveleziufzxyhhhew.supabase.co';

// Sanitize URL in case /rest/v1 or trailing slashes are passed
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_7c__8xC2ZesHSVVF9doALA_0wSq8uLJ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CustomerOrder {
  id?: string;
  created_at?: string;
  reference_id: string;
  full_name: string;
  phone: string;
  email: string;
  occasion_type: string;
  preferred_date: string;
  guest_count: number;
  message?: string;
  status?: string;
}

/**
 * Submit a customer celebration order/enquiry directly into Supabase
 */
export async function submitCustomerOrder(order: Omit<CustomerOrder, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        ...order,
        status: order.status || 'new',
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting customer order:', error);
    throw error;
  }

  return data?.[0];
}

/**
 * Fetch all customer orders (for admin review)
 */
export async function fetchCustomerOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }

  return data as CustomerOrder[];
}
