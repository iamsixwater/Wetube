import { format } from 'timeago.js';

export function formatAgo(date, local = 'en_US') {
  return format(date, local);
}
