import {accounts} from '../../../data';
import {GraphQlContactResolvers} from '../../__generated__/types';

const Contact: GraphQlContactResolvers = {
  name: (v) => v.name,
  accounts: (v) => accounts.filter((a) => a.contact_id === v.id),
};

export default Contact;
