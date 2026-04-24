"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContactButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  showIcon?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

/**
 * Reusable Contact Button
 * Links to WhatsApp with consistent styling and premium animations.
 */
export function ContactButton({
  className,
  size = "default",
  showIcon = false,
  children = "Me contacter",
  onClick,
}: ContactButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-primary hover:bg-primary/90 text-white transition-all hover:scale-105 active:scale-95 shadow-lg",
        className
      )}
    >
      <a
        href="https://wa.me/2290153692058"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="flex items-center justify-center gap-2"
      >
        {showIcon && <MessageSquare className="w-5 h-5" />}
        <span>{children}</span>
      </a>
    </Button>
  );
}
