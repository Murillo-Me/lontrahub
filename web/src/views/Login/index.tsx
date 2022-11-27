import { PublicHeader } from '../../components/PublicHeader';
import { LoginForm } from './LoginForm';

import BackgroundImage from '@/assets/images/backgrounds/otter-bg-teal.png';

console.log('image', BackgroundImage);

export function Login() {
    return (
        <div className="h-screen bg-darkteal">
            <PublicHeader />
            <div className="h-[calc(100%-theme(space.header-height))] w-full flex justify-between items-center bg-hero bg-center bg-no-repeat bg-cover">
                <div className="mr-20 ml-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
