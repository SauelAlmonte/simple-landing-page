import { createFileRoute } from '@tanstack/react-router'
import {AuthPage} from "@/components/auth-page.tsx";

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <AuthPage/>
  )
}
