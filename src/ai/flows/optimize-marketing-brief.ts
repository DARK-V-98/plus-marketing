// OptimizeMarketingBrief.ts
'use server';

/**
 * @fileOverview An AI agent that provides suggestions for improving marketing briefs.
 *
 * - optimizeMarketingBrief - A function that optimizes a marketing brief.
 * - OptimizeMarketingBriefInput - The input type for the optimizeMarketingBrief function.
 * - OptimizeMarketingBriefOutput - The return type for the optimizeMarketingBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeMarketingBriefInputSchema = z.object({
  brief: z.string().describe('The draft marketing brief to be optimized.'),
});
export type OptimizeMarketingBriefInput = z.infer<typeof OptimizeMarketingBriefInputSchema>;

const OptimizeMarketingBriefOutputSchema = z.object({
  suggestions: z.string().describe('AI-powered suggestions to improve the marketing brief.'),
});
export type OptimizeMarketingBriefOutput = z.infer<typeof OptimizeMarketingBriefOutputSchema>;

export async function optimizeMarketingBrief(input: OptimizeMarketingBriefInput): Promise<OptimizeMarketingBriefOutput> {
  return optimizeMarketingBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeMarketingBriefPrompt',
  input: {schema: OptimizeMarketingBriefInputSchema},
  output: {schema: OptimizeMarketingBriefOutputSchema},
  prompt: `You are an AI marketing assistant specializing in optimizing marketing briefs. Please review the draft marketing brief provided below and provide specific, actionable suggestions to improve its clarity, target audience definition, and overall effectiveness.

Draft Marketing Brief:
{{{brief}}}

Suggestions:`,
});

const optimizeMarketingBriefFlow = ai.defineFlow(
  {
    name: 'optimizeMarketingBriefFlow',
    inputSchema: OptimizeMarketingBriefInputSchema,
    outputSchema: OptimizeMarketingBriefOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
