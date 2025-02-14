# Compliance Check API

## Overview
The `Compliance Check API` is designed to analyze webpage content against a given compliance policy and return non-compliant findings in the response. The API leverages OpenAI or open-source LLMs for text analysis.

## Features
- Accepts a webpage URL as input.
- Checks the webpage content against a specified compliance policy.
- Returns a report highlighting non-compliant findings.

## Example Use Case
Consider checking the Mercury website against Stripe's public compliance policy:
- Compliance Policy: [Stripe's Treasury Marketing Policy](https://stripe.com/docs/treasury/marketing-treasury)
- Target Website: [Mercury](https://mercury.com/)

## Prerequisites
Ensure you have the following installed before proceeding:
- Node.js (>= 18.x)
- Claude API key (set in the environment variables)


## Usage
### Running the API
```sh
npm start
```

### Making a Request
Using `curl`:
```sh
curl --location --request GET 'localhost:3000/compliance?url=https://mercury.com/'```
`

### Response Format
```json
{
    "nonComplianceText": "I'll analyze the website content against the compliance requirements and identify violations. Here's a structured report:\n\nCOMPLIANCE VIOLATIONS REPORT\n\n1. Banking Terminology Violations\n- Multiple instances of prohibited terms like \"banking,\" \"bank,\" and \"bank accounts\" throughout the website\n- Uses phrases like \"powerful banking,\" \"online business banking,\" \"your bank account\"\n- References \"banking services\" and \"banking tasks\"\n- Uses term \"banking platform\"\n\n2. Yield/Interest Communication Issues\n- Website mentions \"up to 4.50% yield\" without clear prominent disclaimers about change conditions\n- Yield discussions could be more explicit about not being pass-through interest\n\n3. FDIC Insurance Communication Issues\n- Uses phrase \"FDIC insurance\" without proper qualification of \"eligible for\"\n- Does not consistently maintain clear distinction between Mercury (fintech) and partner banks\n- Missing complete required disclosures about pass-through insurance requirements and limitations\n\n4. Partner Bank Reference Issues\n- Some instances where banking services appear to be directly attributed to Mercury rather than clearly stating they are provided by partner banks\n- Could be interpreted as suggesting users receive banking products directly from bank partners\n\nRECOMMENDATIONS:\n\n1. Terminology Updates\n- Replace \"banking\" with approved terms like \"money management\" or \"financial services\"\n- Update \"bank account\" references to \"financial account\" or \"[Mercury] account\"\n- Remove direct banking terminology from marketing materials\n\n2. Yield Communications\n- Add more prominent disclaimers about yield changes\n- Ensure yield is never implied to be direct bank interest\n- Include clearer conditions and requirements\n\n3. FDIC Insurance Language\n- Revise to consistently use \"eligible for FDIC pass-through insurance\"\n- Add complete required disclosures about insurance limitations\n- Include clearer distinction between Mercury and FDIC-insured partners\n\n4. Partner Bank References\n- Strengthen language clarifying Mercury's role as a fintech company\n- Make partner bank relationships more explicit\n- Avoid implications of direct banking relationships\n\nThe website requires significant revisions to comply with regulatory requirements regarding fintech marketing and communications."
}
```

## Configuration
Set the Claude API key as an environment variable:
```sh
export CLAUDE_API_KEY=your_api_key_here
```



## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any questions or support, open an issue or contact [your email or GitHub profile].

