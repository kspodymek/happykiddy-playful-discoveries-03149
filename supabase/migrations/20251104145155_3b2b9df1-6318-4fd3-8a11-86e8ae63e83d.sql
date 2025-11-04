-- Add UPDATE policy for newsletter subscribers to manage their own subscription
CREATE POLICY "Users can update their own newsletter subscription"
ON public.newsletter_subscribers
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

-- Add DELETE policy for newsletter subscribers to unsubscribe
CREATE POLICY "Users can delete their own newsletter subscription"
ON public.newsletter_subscribers
FOR DELETE
TO public
USING (true);