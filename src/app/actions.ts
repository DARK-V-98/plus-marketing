"use server";

import { z } from "zod";
import {
  optimizeMarketingBrief,
  type OptimizeMarketingBriefInput,
} from "@/ai/flows/optimize-marketing-brief";

const briefSchema = z.object({
  brief: z.string().min(20, {
    message: "Brief must be at least 20 characters long.",
  }),
});

export type FormState = {
  message: string;
  suggestions?: string;
  errors?: {
    brief?: string[];
  };
  fieldValues?: {
    brief: string;
  };
};

export async function handleOptimizeBrief(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = briefSchema.safeParse({
    brief: formData.get("brief"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      fieldValues: {
        brief: formData.get("brief") as string,
      },
    };
  }
  
  const input: OptimizeMarketingBriefInput = { brief: validatedFields.data.brief };

  try {
    const result = await optimizeMarketingBrief(input);
    if (result.suggestions) {
      return {
        message: "success",
        suggestions: result.suggestions,
        fieldValues: {
          brief: validatedFields.data.brief
        }
      };
    } else {
        return {
            message: "The AI could not generate suggestions. Please try rephrasing your brief.",
            fieldValues: {
                brief: validatedFields.data.brief,
            },
        }
    }
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      fieldValues: {
        brief: validatedFields.data.brief,
      },
    };
  }
}
