  
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
  
const readableDate = (dateStr: string) => format(parseISO(dateStr), 'MMMM dd, yyyy');
export default readableDate