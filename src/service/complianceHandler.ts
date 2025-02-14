/**
 * function to handle compliance
 */

import {CLAUDE_API_URL, CLAUDE_API_KEY, COMPLIANCE_URL} from '../utility/constants';
import {fetchDataAgainstUrl} from '../utility/parseURL';
import axios from 'axios';

// Function to Call Claude API for Compliance Comparison
export async function compareWithClaude(websiteText: string) {
    try {

        // get compliance text
        const complianceText = await fetchDataAgainstUrl(COMPLIANCE_URL);

        const requestBody = {
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1024,
            messages: [
                {
                    role: "user",
                    content: JSON.stringify(`Analyze the following website content and compare it against the given compliance text.
                    Identify any non-compliance issues.

                    Website Content: ${websiteText}

                    Compliance content: ${complianceText}

                    Provide a structured report highlighting any violations.`),
                },
            ],
        };

        const response = await axios.post(CLAUDE_API_URL, requestBody, {
            headers: {
                "x-api-key": CLAUDE_API_KEY,
                "Content-Type": "application/json",
                "anthropic-version": "2023-06-01",
            },
        });

        return response.data.content[0].text;
    } catch (error) {
        console.error("Error calling Claude API:", error);
        return "Error processing request.";
    }
}