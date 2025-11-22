import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shadcn/alert-dialog";
import Card from "@/ui/card";
import { ReactNode } from "react";

interface AlertProps {
  open: boolean;
  children: ReactNode;
}

export default function Alert({ open, children }: AlertProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <Card>{children}</Card>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertHeader({ children }: { children: ReactNode }) {
  return <AlertDialogHeader>{children}</AlertDialogHeader>;
}

function AlertTitle({ children }: { children: ReactNode }) {
  return <AlertDialogTitle>{children}</AlertDialogTitle>;
}

function AlertDescription({ children }: { children: ReactNode }) {
  return (
    <AlertDialogDescription className="text-accent">
      {children}
    </AlertDialogDescription>
  );
}

function AlertAction({ children }: { children: ReactNode }) {
  return <AlertDialogFooter>{children}</AlertDialogFooter>;
}

Alert.Header = AlertHeader;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Action = AlertAction;
