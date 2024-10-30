import { redirect } from 'next/navigation';

export default function HomeRedirect() {
    // Redirect from root ("/") to "/home"
    redirect('/home');
}
