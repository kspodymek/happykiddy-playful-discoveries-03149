-- Drop the overly permissive UPDATE and DELETE policies on newsletter_subscribers
DROP POLICY IF EXISTS "Users can update their own newsletter subscription" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Users can delete their own newsletter subscription" ON public.newsletter_subscribers;

-- Add user_id column to track subscription ownership (nullable for existing records)
ALTER TABLE public.newsletter_subscribers 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update the INSERT policy to capture user_id for authenticated users
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;

CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
WITH CHECK (
  -- Authenticated users must provide their own user_id
  (auth.uid() IS NOT NULL AND auth.uid() = user_id) OR
  -- Anonymous users can subscribe without user_id
  (auth.uid() IS NULL AND user_id IS NULL)
);

-- Only authenticated users can update their own subscriptions
CREATE POLICY "Authenticated users can update their own subscription"
ON public.newsletter_subscribers
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Only authenticated users can delete their own subscriptions
CREATE POLICY "Authenticated users can delete their own subscription"
ON public.newsletter_subscribers
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Admins can update any subscription
CREATE POLICY "Admins can update any newsletter subscription"
ON public.newsletter_subscribers
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete any subscription
CREATE POLICY "Admins can delete any newsletter subscription"
ON public.newsletter_subscribers
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));