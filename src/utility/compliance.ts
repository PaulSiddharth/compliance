/**
 * check if complicance data is present else call the compliance website to get data
 */

import { fetchDataAgainstUrl } from './parseURL';
import { COMPLIANCE_URL } from './constants';

let parsedContent = '';

// get compliance data from the url
export async function getComplianceData() {
    if(!parsedContent) {
        return parsedContent;
    }
    const url = 'https://stripe.com/docs/treasury/marketing-treasury';
    parsedContent = await fetchDataAgainstUrl(COMPLIANCE_URL);
    return parsedContent;
}