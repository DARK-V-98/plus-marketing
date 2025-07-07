"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleOptimizeBrief, type FormState } from "@/app/actions";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, LoaderCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Optimize Now
        </>
      )}
    </Button>
  );
}

export function BriefOptimizerForm() {
  const [state, formAction] = useFormState(handleOptimizeBrief, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== "success") {
       if (state.errors) return; // Don't toast for validation errors
       toast({
        variant: "destructive",
        title: "Optimization Failed",
        description: state.message,
      });
    }
    if (state.message === 'success') {
      toast({
        title: "Optimization Complete!",
        description: "Your suggestions are ready below."
      })
      // formRef.current?.reset(); // Optionally reset form on success
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-lg shadow-lg">
      <CardContent className="p-6">
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              name="brief"
              placeholder="Paste your marketing brief here..."
              className="min-h-[150px] resize-y"
              defaultValue={state.fieldValues?.brief}
            />
            {state.errors?.brief && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.brief[0]}
              </p>
            )}
          </div>
          <SubmitButton />
        </form>
        {state.suggestions && (
          <div className="mt-6 border-t pt-6">
            <h3 className="font-headline text-lg font-semibold">AI Suggestions</h3>
            <div className="mt-2 text-sm text-foreground/90 whitespace-pre-wrap rounded-md bg-muted p-4">
              {state.suggestions}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
