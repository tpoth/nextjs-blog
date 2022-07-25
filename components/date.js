import { parseISO, format } from 'date-fns';
// import { format } from 'date-fns';

export default function Date({ dateString }) {
  const dateISO = parseISO(dateString);
  return <time dateTime={dateString}>{format(dateISO, 'LLLL d, yyyy')}</time>;
}