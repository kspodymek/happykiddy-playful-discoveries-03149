import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function UserMenu() {
  return (
    <Button variant="outline" size="icon" disabled>
      <User className="h-5 w-5" />
    </Button>
  );
}
