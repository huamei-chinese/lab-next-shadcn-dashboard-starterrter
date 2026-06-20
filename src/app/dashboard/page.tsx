import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  if (process.env.LAB_DEMO_MODE === 'true') {
    redirect('/dashboard/overview');
  }

  const { userId } = await auth();

  if (!userId) {
    return redirect('/auth/sign-in');
  } else {
    redirect('/dashboard/overview');
  }
}
